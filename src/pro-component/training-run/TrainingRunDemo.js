function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { TrainingRunDemo: () => ei, default: () => el });
  var a = n(95155), r = n(12115), s = n(66558), i = n(80642), l = n(25354), o = n(18310), c = n(36619), u = n(81402), d = n(84824), p = n(9083), h = n(14577), m = n(11012), x = n(35484), _ = n(64962), v = n(44825), f = n(59103), g = n(79267), y = n(48329), j = n(9005), b = n(92298), k = n(7770), N = n(51288), w = n(73474), S = n(28245), M = n(7890), A = n(55809), C = n(99048), R = n.n(C);
  function L(e2, t2, n2 = 120) {
    let a2 = (0, S.d)(e2), s2 = (0, r.useRef)(e2), i2 = (0, r.useRef)(0), l2 = () => {
      cancelAnimationFrame(i2.current), i2.current = 0;
    };
    return (0, r.useEffect)(() => {
      if (s2.current = e2, t2 || e2 < a2.get() - 0.5) {
        l2(), a2.jump(e2);
        return;
      }
      if (i2.current) return;
      let r2 = performance.now(), o2 = (e3) => {
        let t3 = Math.min(64, e3 - r2);
        r2 = e3;
        let l3 = s2.current, c2 = a2.get(), u2 = c2 + (l3 - c2) * (1 - Math.exp(-t3 / n2));
        if (0.05 > Math.abs(l3 - u2)) {
          a2.set(l3), i2.current = 0;
          return;
        }
        a2.set(u2), i2.current = requestAnimationFrame(o2);
      };
      i2.current = requestAnimationFrame(o2);
    }, [e2, t2, n2, a2]), (0, r.useEffect)(() => l2, []), a2;
  }
  function $(e2) {
    let t2, n2 = [];
    for (let a2 of e2)
      void 0 !== a2.train && (t2 = void 0 === t2 ? a2.train : 0.3 * a2.train + 0.7 * t2, n2.push({ step: a2.step, v: t2 }));
    return n2;
  }
  function F(e2, t2) {
    if (e2.length && !(t2 < e2[0].step)) {
      for (let n2 = 1; n2 < e2.length; n2++) {
        let a2 = e2[n2 - 1], r2 = e2[n2];
        if (r2.step >= t2)
          return a2.v + (r2.v - a2.v) * ((t2 - a2.step) / (r2.step - a2.step || 1));
      }
      return e2.at(-1).v;
    }
  }
  function T({
    loss: e2,
    totalSteps: t2,
    epochs: n2,
    shown: s2,
    progress: i2,
    tone: l2,
    hover: o2,
    onHover: c2,
    overlay: u2,
    label: d2
  }) {
    let p2, h2, m2 = (0, r.useRef)(null), x2 = (0, r.useRef)(null), _2 = (0, r.useRef)(null), v2 = (0, r.useRef)(null), f2 = (0, r.useRef)(null), [g2, y2] = (0, r.useState)(0);
    (0, r.useLayoutEffect)(() => {
      let e3 = m2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      y2(Math.round(e3.getBoundingClientRect().width));
      let t3 = new ResizeObserver(([e4]) => {
        e4 && y2(Math.round(e4.contentRect.width));
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let j2 = (0, r.useMemo)(
      () => e2.flatMap(
        (e3) => void 0 === e3.train ? [] : [{ step: e3.step, v: e3.train }]
      ),
      [e2]
    ), b2 = (0, r.useMemo)(() => $(e2), [e2]), k2 = (0, r.useMemo)(
      () => e2.flatMap(
        (e3) => void 0 === e3.val ? [] : [{ step: e3.step, v: e3.val }]
      ),
      [e2]
    ), N2 = (0, r.useMemo)(
      () => e2.reduce((e3, t3) => Math.max(e3, t3.train ?? 0, t3.val ?? 0), 0),
      [e2]
    ), w2 = N2 > 0 ? Math.max(
      h2 = (p2 = 1.06 * N2) > 4 ? 1 : p2 > 1.2 ? 0.5 : p2 > 0.5 ? 0.25 : 0.1,
      Math.ceil(p2 / h2) * h2
    ) : 2.5, S2 = (0, r.useMemo)(() => {
      let e3 = (function(e4) {
        for (let t4 of [0.1, 0.25, 0.5, 1, 2, 5])
          if (e4 / t4 <= 3.01) return t4;
        return 10;
      })(w2), t3 = [];
      for (let n3 = 0; n3 <= w2 + 1e-9; n3 += e3) t3.push(+n3.toFixed(2));
      return t3;
    }, [w2]), A2 = Math.max(1, g2 - 32 - 6), C2 = (0, r.useCallback)((e3) => 32 + e3 / t2 * A2, [A2, t2]), L2 = (0, r.useCallback)(
      (e3) => 8 + (1 - Math.min(e3, w2) / w2) * 142,
      [142, w2]
    ), q2 = (0, r.useCallback)(
      (e3) => {
        let t3 = (t4) => {
          let n4 = "", a2 = 0, r2 = 0;
          for (let s3 = 0; s3 < t4.length; s3++) {
            let i3 = t4[s3];
            if (i3.step > e3) {
              let l3 = t4[s3 - 1];
              if (!l3) break;
              let o3 = (e3 - l3.step) / (i3.step - l3.step || 1);
              a2 = C2(e3), r2 = L2(l3.v + (i3.v - l3.v) * o3), n4 += `L${a2.toFixed(1)} ${r2.toFixed(1)}`;
              break;
            }
            a2 = C2(i3.step), r2 = L2(i3.v), n4 += `${n4 ? "L" : "M"}${a2.toFixed(1)} ${r2.toFixed(1)}`;
          }
          return { d: n4, lx: a2, ly: r2 };
        };
        x2.current?.setAttribute("d", t3(j2).d), v2.current?.setAttribute("d", t3(k2).d);
        let n3 = t3(b2);
        _2.current?.setAttribute("d", n3.d), f2.current && (f2.current.style.opacity = n3.d ? "1" : "0", f2.current.setAttribute(
          "transform",
          `translate(${n3.lx.toFixed(1)} 0)`
        ), f2.current.querySelector("circle")?.setAttribute("cy", n3.ly.toFixed(1)));
      },
      [j2, b2, k2, C2, L2]
    );
    (0, r.useLayoutEffect)(() => {
      g2 && q2(s2.get());
    }, [q2, s2, g2]), (0, M.L)(s2, "change", (e3) => {
      g2 && q2(e3);
    });
    let O2 = (0, r.useMemo)(() => j2.map((e3) => e3.step), [j2]), z2 = (e3) => {
      let t3 = O2[0], n3 = 1 / 0;
      for (let a2 of O2) {
        let r2 = Math.abs(a2 - e3);
        r2 < n3 && (n3 = r2, t3 = a2);
      }
      return t3;
    }, I2 = (e3) => {
      if (!O2.length || !g2) return;
      let n3 = e3.currentTarget.getBoundingClientRect(), a2 = (e3.clientX - n3.left - 32) / A2 * t2;
      c2(z2(Math.max(0, Math.min(O2.at(-1), a2))));
    }, P2 = null === o2 ? void 0 : F(b2, o2), W2 = null === o2 ? void 0 : F(k2, Math.min(o2, k2.at(-1)?.step ?? -1)), D2 = Array.from({ length: n2 }, (e3, t3) => t3), B2 = t2 / n2;
    return (0, a.jsxs)("div", {
      className: R().chart,
      "data-tone": l2,
      children: [
        (0, a.jsxs)("div", {
          ref: m2,
          className: R().plot,
          style: { height: 156 },
          tabIndex: e2.length ? 0 : -1,
          role: "group",
          "aria-label": d2,
          onPointerMove: I2,
          onPointerDown: I2,
          onPointerLeave: () => c2(null),
          onKeyDown: (e3) => {
            let t3;
            if (!O2.length) return;
            let n3 = null === o2 ? O2.length - 1 : O2.indexOf(z2(o2)), a2 = e3.shiftKey ? 10 : 1;
            if ("ArrowLeft" === e3.key)
              t3 = O2[Math.max(0, n3 - (null === o2 ? 0 : a2))];
            else if ("ArrowRight" === e3.key)
              t3 = O2[Math.min(O2.length - 1, n3 + (null === o2 ? 0 : a2))];
            else if ("Home" === e3.key) t3 = O2[0];
            else if ("End" === e3.key) t3 = O2.at(-1);
            else {
              if ("Escape" !== e3.key || null === o2) return;
              t3 = null;
            }
            e3.preventDefault(), c2(t3 ?? null);
          },
          onBlur: () => c2(null),
          children: [
            g2 ? (0, a.jsxs)("svg", {
              className: R().svg,
              width: g2,
              height: 156,
              viewBox: `0 0 ${g2} 156`,
              "aria-hidden": "true",
              children: [
                S2.map(
                  (e3) => (0, a.jsxs)(
                    "g",
                    {
                      children: [
                        (0, a.jsx)("line", {
                          className: R().grid,
                          x1: 32,
                          x2: g2 - 6,
                          y1: L2(e3),
                          y2: L2(e3)
                        }),
                        (0, a.jsx)("text", {
                          className: R().tick,
                          x: 24,
                          y: L2(e3),
                          dy: ".34em",
                          textAnchor: "end",
                          children: e3.toFixed(1)
                        })
                      ]
                    },
                    e3
                  )
                ),
                D2.slice(1).map(
                  (e3) => (0, a.jsx)(
                    "line",
                    {
                      className: R().boundary,
                      x1: C2(e3 * B2),
                      x2: C2(e3 * B2),
                      y1: 8,
                      y2: 150
                    },
                    e3
                  )
                ),
                (0, a.jsx)("path", { ref: x2, className: R().raw }),
                (0, a.jsx)("path", { ref: v2, className: R().val }),
                (0, a.jsx)("path", { ref: _2, className: R().train }),
                (0, a.jsxs)("g", {
                  ref: f2,
                  className: R().head,
                  style: { opacity: 0 },
                  children: [
                    (0, a.jsx)("line", { x1: 0, x2: 0, y1: 8, y2: 150 }),
                    (0, a.jsx)("circle", { cx: 0, cy: 0, r: 3.5 })
                  ]
                }),
                null !== o2 ? (0, a.jsxs)("g", {
                  className: R().cursor,
                  transform: `translate(${C2(o2).toFixed(1)} 0)`,
                  children: [
                    (0, a.jsx)("line", {
                      x1: 0,
                      x2: 0,
                      y1: 8,
                      y2: 150
                    }),
                    void 0 !== W2 ? (0, a.jsx)("circle", {
                      className: R().cursorVal,
                      cx: 0,
                      cy: L2(W2),
                      r: 3
                    }) : null,
                    void 0 !== P2 ? (0, a.jsx)("circle", {
                      className: R().cursorTrain,
                      cx: 0,
                      cy: L2(P2),
                      r: 3
                    }) : null
                  ]
                }) : null
              ]
            }) : null,
            u2 ? (0, a.jsx)("div", {
              className: R().overlay,
              style: { left: 32 },
              children: u2
            }) : null
          ]
        }),
        (0, a.jsx)("div", {
          className: R().epochs,
          style: { paddingLeft: 32, paddingRight: 6 },
          "aria-hidden": "true",
          children: D2.map(
            (e3) => (0, a.jsx)(E, { index: e3, per: B2, progress: i2 }, e3)
          )
        })
      ]
    });
  }
  function E({ index: e2, per: t2, progress: n2 }) {
    let r2 = (0, A.G)(n2, (n3) => Math.max(0, Math.min(1, (n3 - e2 * t2) / t2)));
    return (0, a.jsxs)("span", {
      className: R().epoch,
      children: [
        (0, a.jsx)("span", {
          className: R().epochTrack,
          children: (0, a.jsx)(l.PY1.span, {
            className: R().epochFill,
            style: { scaleX: r2 }
          })
        }),
        (0, a.jsxs)("span", {
          className: R().epochLabel,
          children: ["Epoch ", e2 + 1]
        })
      ]
    });
  }
  let q = 1860 / 1120, O = (e2) => {
    let t2 = 43758.5453 * Math.sin(12.9898 * e2 + 78.233);
    return t2 - Math.floor(t2) - 0.5;
  }, z = (e2) => 0.3 + 1.62 * Math.exp(-e2 / 240) + 0.14 * Math.exp(-e2 / 1100) - 0.035 * Math.floor(Math.min(e2, 1859) / 620) + 0.08 * O(e2) * (0.45 + 0.55 * Math.exp(-e2 / 700)), I = (e2) => 0.44 + 1.38 * Math.exp(-e2 / 280) + 0.1 * Math.exp(-e2 / 1e3) + 3e-5 * Math.max(0, e2 - 1300) + 0.01 * O(e2 + 7), P = (e2) => 0.87 - 0.29 * Math.exp(-e2 / 520), W = 0, D = (e2, t2, n2) => ({ id: `e${++W}`, kind: e2, label: t2, step: n2 });
  function B() {
    return {
      status: "queued",
      step: 0,
      loss: [],
      events: [],
      activity: "Waiting for 8\xD7 H200 \xB7 2nd in queue",
      wait: 1300,
      phase: "queue",
      failedOnce: false
    };
  }
  let H = {
    name: "Qwen3.8 Max",
    mark: (0, a.jsx)(function({ title: e2 = "Qwen", ...t2 }) {
      let n2 = (0, r.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
      return (0, a.jsxs)("svg", {
        viewBox: "0 0 24 24",
        role: "img",
        "aria-label": e2,
        ...t2,
        children: [
          (0, a.jsx)("path", {
            d: "M12.604 1.34c.393.69.784 1.382 1.174 2.075a.18.18 0 00.157.091h5.552c.174 0 .322.11.446.327l1.454 2.57c.19.337.24.478.024.837-.26.43-.513.864-.76 1.3l-.367.658c-.106.196-.223.28-.04.512l2.652 4.637c.172.301.111.494-.043.77-.437.785-.882 1.564-1.335 2.34-.159.272-.352.375-.68.37-.777-.016-1.552-.01-2.327.016a.099.099 0 00-.081.05 575.097 575.097 0 01-2.705 4.74c-.169.293-.38.363-.725.364-.997.003-2.002.004-3.017.002a.537.537 0 01-.465-.271l-1.335-2.323a.09.09 0 00-.083-.049H4.982c-.285.03-.553-.001-.805-.092l-1.603-2.77a.543.543 0 01-.002-.54l1.207-2.12a.198.198 0 000-.197 550.951 550.951 0 01-1.875-3.272l-.79-1.395c-.16-.31-.173-.496.095-.965.465-.813.927-1.625 1.387-2.436.132-.234.304-.334.584-.335a338.3 338.3 0 012.589-.001.124.124 0 00.107-.063l2.806-4.895a.488.488 0 01.422-.246c.524-.001 1.053 0 1.583-.006L11.704 1c.341-.003.724.032.9.34zm-3.432.403a.06.06 0 00-.052.03L6.254 6.788a.157.157 0 01-.135.078H3.253c-.056 0-.07.025-.041.074l5.81 10.156c.025.042.013.062-.034.063l-2.795.015a.218.218 0 00-.2.116l-1.32 2.31c-.044.078-.021.118.068.118l5.716.008c.046 0 .08.02.104.061l1.403 2.454c.046.081.092.082.139 0l5.006-8.76.783-1.382a.055.055 0 01.096 0l1.424 2.53a.122.122 0 00.107.062l2.763-.02a.04.04 0 00.035-.02.041.041 0 000-.04l-2.9-5.086a.108.108 0 010-.113l.293-.507 1.12-1.977c.024-.041.012-.062-.035-.062H9.2c-.059 0-.073-.026-.043-.077l1.434-2.505a.107.107 0 000-.114L9.225 1.774a.06.06 0 00-.053-.031zm6.29 8.02c.046 0 .058.02.034.06l-.832 1.465-2.613 4.585a.056.056 0 01-.05.029.058.058 0 01-.05-.029L8.498 9.841c-.02-.034-.01-.052.028-.054l.216-.012 6.722-.012z",
            fill: `url(#lobe-icons-qwen-${n2})`,
            fillRule: "nonzero"
          }),
          (0, a.jsx)("defs", {
            children: (0, a.jsxs)("linearGradient", {
              id: `lobe-icons-qwen-${n2}`,
              x1: "0%",
              x2: "100%",
              y1: "0%",
              y2: "0%",
              children: [
                (0, a.jsx)("stop", {
                  offset: "0%",
                  stopColor: "#6336E7",
                  stopOpacity: ".84"
                }),
                (0, a.jsx)("stop", {
                  offset: "100%",
                  stopColor: "#6F69F7",
                  stopOpacity: ".84"
                })
              ]
            })
          })
        ]
      });
    }, {})
  }, G = {
    name: "arcwork/support-tickets-oct",
    examples: 48210,
    mark: (0, a.jsx)(function({ title: e2 = "Hugging Face", ...t2 }) {
      return (0, a.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...t2,
        children: (0, a.jsx)("path", {
          d: "M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624"
        })
      });
    }, {})
  }, V = [...k.T.ease.standard], U = (e2) => Math.floor(e2).toLocaleString("en-US");
  function Y(e2) {
    let t2 = Math.max(0, Math.round(e2));
    return t2 >= 3600 ? `${Math.floor(t2 / 3600)}h ${String(Math.floor(t2 / 60) % 60).padStart(2, "0")}m` : t2 >= 60 ? `${Math.floor(t2 / 60)}m ${String(t2 % 60).padStart(2, "0")}s` : `${t2}s`;
  }
  function X(e2) {
    return void 0 === e2.status ? (0, a.jsx)(Q, { ...e2 }) : (0, a.jsx)(en, { ...e2, status: e2.status });
  }
  function Q({ scenario: e2, ...t2 }) {
    let [n2, s2] = (0, r.useState)(true), [i2, l2] = (0, r.useState)(null);
    (0, r.useEffect)(() => {
      if (!i2 || "u" < typeof IntersectionObserver) return;
      let e3 = new IntersectionObserver(([e4]) => {
        e4 && s2(e4.isIntersecting);
      });
      return e3.observe(i2), () => e3.disconnect();
    }, [i2]);
    let o2 = (function(e3 = "healthy", t3 = true) {
      let [n3, a2] = (0, r.useState)(B), s3 = (0, r.useRef)(t3);
      (0, r.useEffect)(() => {
        s3.current = t3;
      }, [t3]);
      let [i3, l3] = (0, r.useState)(e3);
      i3 !== e3 && (l3(e3), a2(B())), (0, r.useEffect)(() => {
        let t4 = performance.now(), n4 = window.setInterval(() => {
          let n5 = performance.now(), r2 = Math.min(100, n5 - t4);
          t4 = n5, s3.current && a2((t5) => {
            if ("queue" === t5.phase || "warmup" === t5.phase || "hold" === t5.phase) {
              let e4 = t5.wait - r2;
              return e4 > 0 ? { ...t5, wait: e4 } : "queue" === t5.phase ? {
                ...t5,
                status: "running",
                phase: "warmup",
                wait: 900,
                activity: `Loading weights \xB7 ${48210 .toLocaleString("en-US")} examples`
              } : "warmup" === t5.phase ? {
                ...t5,
                phase: "train",
                activity: void 0,
                loss: [{ step: 0, train: z(0), val: I(0) }],
                events: [
                  D(
                    "start",
                    "Training started on 8\xD7 H200",
                    0
                  )
                ]
              } : { ...B(), failedOnce: false };
            }
            if ("train" !== t5.phase || "running" !== t5.status) return t5;
            let n6 = Math.min(1860, t5.step + 1860 * r2 / 14e3), a3 = "oom" === e3 && !t5.failedOnce && n6 >= 940;
            a3 && (n6 = 940);
            let s4 = (function(e4, t6) {
              let n7 = e4.step, a4 = e4.loss.slice(), r3 = e4.events.slice();
              for (let e5 = 10 * Math.floor(n7 / 10) + 10; e5 <= t6; e5 += 10) {
                let t7 = { step: e5, train: z(e5) };
                (e5 % 60 == 0 || 1860 === e5) && (t7.val = I(e5)), a4.push(t7), e5 % 620 == 0 && e5 < 1860 && r3.push(
                  D(
                    "checkpoint",
                    `Checkpoint saved \xB7 epoch ${e5 / 620}`,
                    e5
                  )
                ), e5 % 310 == 0 && e5 % 620 != 0 && r3.push(
                  D("eval", `Eval: ${P(e5).toFixed(2)} accuracy`, e5)
                );
              }
              return { ...e4, step: t6, loss: a4, events: r3 };
            })(t5, n6);
            return a3 ? {
              ...s4,
              status: "failed",
              phase: "idle",
              failedOnce: true,
              error: `CUDA out of memory on GPU 3 at step ${940 .toLocaleString("en-US")}`,
              events: [
                ...s4.events,
                D("error", "Out of memory \xB7 GPU 3", 940)
              ],
              notice: "Run failed at step 940. Simulated, nothing was sent."
            } : (n6 >= 1860 && (s4 = {
              ...s4,
              status: "completed",
              phase: "hold",
              wait: 9e3,
              events: [
                ...s4.events,
                D(
                  "done",
                  `Training complete \xB7 ${P(1860).toFixed(2)} accuracy`,
                  1860
                )
              ]
            }), s4);
          });
        }, 50);
        return () => window.clearInterval(n4);
      }, [e3]);
      let o3 = (0, r.useCallback)(
        () => a2(
          (e4) => "running" === e4.status ? {
            ...e4,
            status: "paused",
            notice: `Paused at step ${Math.floor(e4.step).toLocaleString("en-US")}. Simulated, nothing was sent.`
          } : e4
        ),
        []
      ), c2 = (0, r.useCallback)(
        () => a2(
          (e4) => "paused" === e4.status ? {
            ...e4,
            status: "running",
            notice: "Resumed. Simulated, nothing was sent."
          } : e4
        ),
        []
      ), u2 = (0, r.useCallback)(
        () => a2((e4) => ({
          ...e4,
          status: "cancelled",
          phase: "hold",
          wait: 7e3,
          activity: void 0,
          events: [
            ...e4.events,
            D(
              "warning",
              "Cancelled \xB7 last checkpoint kept",
              Math.floor(e4.step)
            )
          ],
          notice: "Run cancelled. Simulated, nothing was sent."
        })),
        []
      ), d2 = (0, r.useCallback)(
        () => a2((e4) => {
          let t4 = 620 * Math.floor(e4.step / 620);
          return {
            ...e4,
            status: "running",
            phase: "train",
            step: t4,
            error: void 0,
            loss: e4.loss.filter((e5) => e5.step <= t4),
            events: [
              ...e4.events,
              D(
                "info",
                t4 ? `Resumed from checkpoint \xB7 epoch ${t4 / 620}` : "Restarted from step 0",
                t4
              )
            ],
            notice: `Retrying from step ${t4.toLocaleString("en-US")}. Simulated, nothing was sent.`
          };
        }),
        []
      ), p2 = (0, r.useCallback)(
        () => a2(() => ({
          ...B(),
          notice: "Run queued again. Simulated, nothing was sent."
        })),
        []
      ), h2 = (0, r.useCallback)(
        async (e4) => (a2((e5) => ({ ...e5, wait: Math.max(e5.wait, 8e3) })), await new Promise((t4, n4) => {
          let a3 = window.setTimeout(t4, 1200);
          e4.addEventListener(
            "abort",
            () => {
              window.clearTimeout(a3), n4(e4.reason);
            },
            { once: true }
          );
        }), a2((e5) => ({
          ...e5,
          wait: 6500,
          notice: "Deployed. Simulated, nothing was deployed."
        })), { endpoint: "ft:qwen3.8-max:arcwork:support-triage-v3" }),
        []
      ), m2 = Math.floor(n3.step), x2 = n3.loss[0]?.val ?? I(0), _2 = [...n3.loss].reverse().find((e4) => void 0 !== e4.val)?.val ?? x2, v2 = "completed" === n3.status ? [
        {
          label: "Validation loss",
          value: _2.toFixed(3),
          hint: `from ${x2.toFixed(2)}`
        },
        {
          label: "Eval accuracy",
          value: P(1860).toFixed(2),
          hint: `from ${P(0).toFixed(2)}`
        },
        {
          label: "Train loss",
          value: ($(n3.loss).at(-1)?.v ?? 0).toFixed(3),
          hint: "smoothed"
        },
        { label: "Cost", value: "$9.70", hint: "Sample" }
      ] : void 0;
      return {
        status: n3.status,
        step: m2,
        totalSteps: 1860,
        epochs: 3,
        loss: n3.loss,
        learningRate: m2 < 60 ? m2 / 60 * 2e-4 : 2e-5 + 9e-5 * (1 + Math.cos(Math.PI * (m2 - 60) / 1800)),
        elapsed: m2 / q,
        eta: (1860 - m2) / q,
        events: n3.events,
        metrics: v2,
        activity: n3.activity,
        error: n3.error,
        notice: n3.notice,
        onPause: o3,
        onResume: c2,
        onCancel: u2,
        onRetry: d2,
        onRestart: p2,
        onDeploy: h2
      };
    })(e2, n2);
    return (0, a.jsx)(en, {
      ...t2,
      ref: l2,
      name: t2.name ?? "support-triage-v3",
      details: t2.details ?? ["LoRA r16", "8\xD7 H200"],
      status: o2.status,
      step: o2.step,
      totalSteps: o2.totalSteps,
      epochs: o2.epochs,
      loss: o2.loss,
      learningRate: o2.learningRate,
      elapsed: o2.elapsed,
      eta: o2.eta,
      events: o2.events,
      metrics: o2.metrics,
      activity: o2.activity,
      error: o2.error,
      notice: o2.notice,
      onPause: o2.onPause,
      onResume: o2.onResume,
      onCancel: o2.onCancel,
      onRetry: o2.onRetry,
      onRestart: o2.onRestart,
      onDeploy: o2.onDeploy
    });
  }
  function Z({ id: e2, children: t2, className: n2, reduced: r2 }) {
    return (0, a.jsx)("span", {
      className: [R().swap, n2].filter(Boolean).join(" "),
      children: (0, a.jsx)(i.N, {
        initial: false,
        children: (0, a.jsx)(
          l.PY1.span,
          {
            className: R().swapItem,
            initial: r2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: r2 ? 0 : k.T.duration.fast, ease: V }
            },
            exit: { opacity: 0, transition: { duration: 0.1 * !r2, ease: V } },
            children: t2
          },
          e2
        )
      })
    });
  }
  function K({ value: e2 }) {
    return (0, a.jsx)("span", {
      className: R().num,
      "data-empty": void 0 === e2 || void 0,
      children: e2 ?? "0.000"
    });
  }
  function J() {
    return (0, a.jsxs)("svg", {
      className: R().spinner,
      viewBox: "0 0 16 16",
      width: "14",
      height: "14",
      "aria-hidden": "true",
      children: [
        (0, a.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          className: R().spinnerTrack
        }),
        (0, a.jsx)("path", {
          d: "M8 2a6 6 0 0 1 6 6",
          className: R().spinnerArc
        })
      ]
    });
  }
  let ee = {
    start: c.A,
    checkpoint: u.A,
    eval: d.A,
    epoch: p.A,
    info: h.A,
    warning: m.A,
    error: x.A,
    done: _.A
  };
  function et({ action: e2, reduced: t2 }) {
    return (0, a.jsx)(i.N, {
      mode: "popLayout",
      initial: false,
      children: e2 ? (0, a.jsx)(
        l.PY1.span,
        {
          className: R().slot,
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: { duration: t2 ? 0 : k.T.duration.fast, ease: V }
          },
          exit: { opacity: 0, transition: { duration: 0.1 * !t2, ease: V } },
          children: (0, a.jsxs)(N.$, {
            size: "sm",
            variant: "accent" === e2.variant ? "primary" : e2.variant,
            loading: e2.loading,
            className: "accent" === e2.variant ? R().accent : void 0,
            onClick: e2.onClick,
            children: [e2.icon, e2.label]
          })
        },
        "slot"
      ) : null
    });
  }
  function en({
    status: e2,
    name: t2 = "Fine-tuning job",
    model: n2 = H,
    details: s2 = [],
    dataset: u2 = G,
    step: d2 = 0,
    totalSteps: p2 = 1,
    epochs: h2 = 1,
    loss: m2 = [],
    learningRate: N2,
    elapsed: S2,
    eta: M2,
    events: A2 = [],
    metrics: C2,
    activity: F2,
    error: E2,
    onPause: q2,
    onResume: O2,
    onCancel: z2,
    onRetry: I2,
    onRestart: P2,
    onDeploy: W2,
    notice: D2,
    className: B2,
    ref: X2
  }) {
    let Q2 = (0, o.I)() ?? false, ea2 = Math.max(1, p2), er2 = Math.max(1, h2), es2 = Math.min(Math.max(0, d2), ea2), ei2 = L(m2.at(-1)?.step ?? 0, Q2), el2 = L("completed" === e2 ? ea2 : es2, Q2), [eo, ec] = (0, r.useState)(null), [eu, ed] = (0, r.useState)(false), [ep, eh] = (0, r.useState)({ phase: "idle" }), [em, ex] = (0, r.useState)(e2);
    em !== e2 && (ex(e2), ed(false), "completed" !== e2 && eh({ phase: "idle" })), (0, r.useEffect)(() => {
      if (!eu) return;
      let e3 = window.setTimeout(() => ed(false), 3e3);
      return () => window.clearTimeout(e3);
    }, [eu]);
    let e_ = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
      "completed" !== e2 && e_.current?.abort();
    }, [e2]), (0, r.useEffect)(() => () => e_.current?.abort(), []);
    let ev = async () => {
      if (!W2 || "deploying" === ep.phase) return;
      let e3 = new AbortController();
      e_.current = e3, eh({ phase: "deploying" });
      try {
        let t3 = await W2(e3.signal);
        e3.signal.aborted || eh({ phase: "deployed", endpoint: t3?.endpoint });
      } catch (t3) {
        e3.signal.aborted || eh({
          phase: "error",
          error: t3 instanceof Error ? t3.message : "Deploy failed"
        });
      }
    }, ef = (0, r.useMemo)(() => $(m2), [m2]), eg = ef.at(-1)?.v, ey = (0, r.useMemo)(() => {
      for (let e3 = m2.length - 1; e3 >= 0; e3--)
        if (void 0 !== m2[e3].val) return m2[e3].val;
    }, [m2]), ej = null === eo ? null : {
      train: ef.find((e3) => e3.step === eo)?.v,
      val: (() => {
        let e3;
        for (let t3 of m2) {
          if (t3.step > eo) break;
          void 0 !== t3.val && (e3 = t3.val);
        }
        return e3;
      })()
    }, eb = (ej ? ej.train : eg)?.toFixed(3), ek = (ej ? ej.val : ey)?.toFixed(3), eN = null !== eo ? (0, a.jsxs)(a.Fragment, {
      children: [
        "Step ",
        (0, a.jsx)("span", { className: R().num, children: U(eo) })
      ]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [
        "Step ",
        (0, a.jsx)("span", { className: R().num, children: U(es2) }),
        " / ",
        (0, a.jsx)("span", { className: R().num, children: U(ea2) })
      ]
    }), ew = "completed" === e2 && "deployed" === ep.phase, eS = "running" === e2 && 0 === m2.length, eM = ew ? {
      key: "deployed",
      label: "Deployed",
      icon: (0, a.jsx)(v.A, {
        size: 14,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      }),
      tone: "success"
    } : "queued" === e2 ? {
      key: "queued",
      label: "Queued",
      icon: (0, a.jsx)(f.A, {
        size: 14,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      }),
      tone: "quiet"
    } : "running" === e2 ? {
      key: eS ? "starting" : "running",
      label: eS ? "Starting" : "Training",
      icon: (0, a.jsx)(J, {}),
      tone: "live"
    } : "paused" === e2 ? {
      key: "paused",
      label: "Paused",
      icon: (0, a.jsx)(g.A, {
        size: 14,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      }),
      tone: "quiet"
    } : "completed" === e2 ? {
      key: "completed",
      label: "Completed",
      icon: (0, a.jsx)(_.A, {
        size: 14,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      }),
      tone: "success"
    } : "failed" === e2 ? {
      key: "failed",
      label: "Failed",
      icon: (0, a.jsx)(x.A, {
        size: 14,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      }),
      tone: "danger"
    } : {
      key: "cancelled",
      label: "Cancelled",
      icon: (0, a.jsx)(y.A, {
        size: 14,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      }),
      tone: "quiet"
    }, eA = Math.min(er2, Math.floor(es2 / (ea2 / er2)) + 1), eC = [
      {
        label: "Epoch",
        value: "queued" === e2 || eS ? `0 of ${er2}` : `${eA} of ${er2}`
      },
      {
        label: "Learning rate",
        value: void 0 === N2 ? "Not set" : ((e3) => {
          if (0 === e3) return "0";
          let [t3, n3] = e3.toExponential(2).split("e");
          return `${t3}e${Number(n3)}`;
        })(N2)
      },
      { label: "Elapsed", value: Y(S2 ?? 0) },
      {
        label: "ETA",
        value: "queued" === e2 ? `About ${Y(M2 ?? 0)}` : "failed" === e2 || "cancelled" === e2 ? "Stopped" : "paused" === e2 ? "On hold" : Y(M2 ?? 0)
      }
    ], eR = C2 ?? [
      { label: "Train loss", value: eg?.toFixed(3) ?? "0.000" },
      { label: "Validation loss", value: ey?.toFixed(3) ?? "0.000" },
      { label: "Steps", value: U(ea2) },
      { label: "Duration", value: Y(S2 ?? 0) }
    ], eL = "completed" === e2, e$ = eL ? eR.slice(0, 4) : eC, eF = "queued" === e2 || eS ? (0, a.jsx)("span", {
      className: R().overlayBox,
      children: (0, a.jsx)("span", {
        className: R().overlayText,
        "data-shimmer": Q2 ? void 0 : "",
        children: F2 ?? (eS ? "Starting" : "Waiting for a GPU")
      })
    }) : 0 === m2.length ? (0, a.jsx)("span", {
      className: R().overlayBox,
      children: (0, a.jsx)("span", {
        className: R().overlayText,
        children: "No loss samples yet"
      })
    }) : null, eT = "error" === ep.phase ? {
      key: `deploy-error:${ep.error}`,
      tone: "danger",
      body: (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(x.A, {
            size: 14,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          }),
          (0, a.jsx)("span", {
            className: R().truncate,
            children: ep.error
          })
        ]
      })
    } : ew && ep.endpoint ? {
      key: `endpoint:${ep.endpoint}`,
      tone: "plain",
      body: (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(_.A, {
            size: 14,
            strokeWidth: 1.75,
            "aria-hidden": "true",
            className: R().successIcon
          }),
          (0, a.jsx)("code", {
            className: `${R().truncate} ${R().endpoint}`,
            children: ep.endpoint
          }),
          (0, a.jsx)(w.CopyButton, {
            value: ep.endpoint,
            label: "Copy endpoint",
            iconOnly: true,
            variant: "plain",
            className: R().copy
          })
        ]
      })
    } : "failed" === e2 && E2 ? {
      key: `error:${E2}`,
      tone: "danger",
      body: (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(x.A, {
            size: 14,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          }),
          (0, a.jsx)("span", {
            className: R().truncate,
            children: E2
          })
        ]
      })
    } : {
      key: `dataset:${u2.name}`,
      tone: "plain",
      body: (0, a.jsxs)(a.Fragment, {
        children: [
          u2.mark ? (0, a.jsx)("span", {
            className: R().datasetMark,
            "aria-hidden": "true",
            children: u2.mark
          }) : null,
          (0, a.jsx)("span", {
            className: R().truncate,
            children: u2.name
          }),
          void 0 !== u2.examples ? (0, a.jsxs)("span", {
            className: R().muted,
            children: [U(u2.examples), " examples"]
          }) : null
        ]
      })
    }, eE = (e3) => (0, a.jsx)(e3, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), eq = z2 ? eu ? {
      label: "Confirm cancel",
      onClick: () => {
        ed(false), z2();
      },
      variant: "danger"
    } : {
      label: "Cancel",
      icon: eE(j.A),
      onClick: () => ed(true),
      variant: "secondary"
    } : null, eO = null, ez = null;
    "queued" === e2 ? eO = eq : "running" === e2 ? (eO = eq, ez = q2 ? {
      label: "Pause",
      icon: eE(g.A),
      onClick: q2,
      variant: "secondary"
    } : null) : "paused" === e2 ? (eO = eq, ez = O2 ? {
      label: "Resume",
      icon: eE(c.A),
      onClick: O2,
      variant: "accent"
    } : null) : "failed" === e2 ? (eO = P2 ? { label: "Run again", onClick: P2, variant: "secondary" } : null, ez = I2 ? {
      label: "Retry from checkpoint",
      icon: eE(b.A),
      onClick: I2,
      variant: "accent"
    } : null) : "cancelled" === e2 ? ez = P2 ? {
      label: "Run again",
      icon: eE(b.A),
      onClick: P2,
      variant: "accent"
    } : null : "completed" === e2 && (eO = P2 ? { label: "Run again", onClick: P2, variant: "secondary" } : null, ez = W2 && !ew ? {
      label: "error" === ep.phase ? "Retry deploy" : "deploying" === ep.phase ? "Deploying" : "Deploy",
      icon: eE(v.A),
      onClick: ev,
      variant: "accent",
      loading: "deploying" === ep.phase
    } : null);
    let eI = `${t2}: ${eM.label}${"failed" === e2 && E2 ? `. ${E2}` : ""}${eu ? ". Press Confirm cancel to stop the run" : ""}`, eP = m2.length ? `Loss curve, step ${U(es2)} of ${U(ea2)}. Train loss ${eg?.toFixed(3) ?? "none"}, validation loss ${ey?.toFixed(3) ?? "none"}. Use the arrow keys to inspect steps.` : "Loss curve, no samples yet", eW = "failed" === e2 ? "danger" : "completed" === e2 ? "done" : "running" === e2 ? "live" : "quiet", eD = A2.slice(-4).reverse();
    return (0, a.jsxs)("div", {
      ref: X2,
      className: [R().root, B2].filter(Boolean).join(" "),
      "data-status": e2,
      children: [
        (0, a.jsxs)("header", {
          className: R().header,
          children: [
            n2.mark ? (0, a.jsx)("span", {
              className: R().mark,
              "aria-hidden": "true",
              children: n2.mark
            }) : null,
            (0, a.jsxs)("div", {
              className: R().heading,
              children: [
                (0, a.jsx)("h3", { className: R().title, children: t2 }),
                (0, a.jsx)("p", {
                  className: R().meta,
                  children: [n2.name, ...s2].join(" \xB7 ")
                })
              ]
            }),
            (0, a.jsx)(Z, {
              id: eM.key,
              className: R().badgeSlot,
              reduced: Q2,
              children: (0, a.jsxs)("span", {
                className: R().badge,
                "data-tone": eM.tone,
                children: [eM.icon, (0, a.jsx)("span", { children: eM.label })]
              })
            })
          ]
        }),
        (0, a.jsxs)("section", {
          className: R().curve,
          "aria-label": "Loss",
          children: [
            (0, a.jsxs)("div", {
              className: R().legend,
              children: [
                (0, a.jsxs)("span", {
                  className: R().key,
                  children: [
                    (0, a.jsx)("span", {
                      className: R().swatch,
                      "data-series": "train",
                      "aria-hidden": "true"
                    }),
                    (0, a.jsx)("span", {
                      className: R().keyLabel,
                      children: "Train"
                    }),
                    (0, a.jsx)(K, { value: eb })
                  ]
                }),
                (0, a.jsxs)("span", {
                  className: R().key,
                  children: [
                    (0, a.jsx)("span", {
                      className: R().swatch,
                      "data-series": "val",
                      "aria-hidden": "true"
                    }),
                    (0, a.jsxs)("span", {
                      className: R().keyLabel,
                      children: [
                        (0, a.jsx)("span", {
                          className: R().long,
                          children: "Validation"
                        }),
                        (0, a.jsx)("span", {
                          className: R().short,
                          children: "Val"
                        })
                      ]
                    }),
                    (0, a.jsx)(K, { value: ek })
                  ]
                }),
                (0, a.jsx)("span", { className: R().stepText, children: eN })
              ]
            }),
            (0, a.jsx)(T, {
              loss: m2,
              totalSteps: ea2,
              epochs: er2,
              shown: ei2,
              progress: el2,
              tone: eW,
              hover: eo,
              onHover: ec,
              overlay: eF,
              label: eP
            })
          ]
        }),
        (0, a.jsx)(Z, {
          id: eL ? "results" : "live",
          className: R().statsSlot,
          reduced: Q2,
          children: (0, a.jsx)("dl", {
            className: R().stats,
            children: e$.map(
              (e3) => (0, a.jsxs)(
                "div",
                {
                  className: R().stat,
                  children: [
                    (0, a.jsx)("dt", { children: e3.label }),
                    (0, a.jsxs)("dd", {
                      children: [
                        (0, a.jsx)("span", {
                          className: eL || e3 === eC[1] ? void 0 : R().num,
                          children: e3.value
                        }),
                        e3.hint ? (0, a.jsx)("span", {
                          className: R().hint,
                          children: e3.hint
                        }) : null
                      ]
                    })
                  ]
                },
                e3.label
              )
            )
          })
        }),
        (0, a.jsx)("section", {
          className: R().events,
          "aria-label": "Events",
          children: (0, a.jsx)("ol", {
            className: R().eventList,
            children: eD.length ? (0, a.jsx)(i.N, {
              initial: false,
              children: eD.map((e3, t3) => {
                let n3 = ee[e3.kind];
                return (0, a.jsxs)(
                  l.PY1.li,
                  {
                    className: R().event,
                    "data-kind": e3.kind,
                    "aria-hidden": t3 > 2 || void 0,
                    initial: { opacity: 0, y: 32 * t3 },
                    animate: { opacity: t3 > 2 ? 0 : 1, y: 32 * t3 },
                    exit: {
                      opacity: 0,
                      transition: { duration: 0.1 * !Q2 }
                    },
                    transition: Q2 ? { duration: 0 } : {
                      y: {
                        type: "spring",
                        visualDuration: 0.24,
                        bounce: 0
                      },
                      opacity: { duration: k.T.duration.fast, ease: V }
                    },
                    children: [
                      (0, a.jsx)(n3, {
                        size: 14,
                        strokeWidth: 1.75,
                        "aria-hidden": "true",
                        className: R().eventIcon
                      }),
                      (0, a.jsx)("span", {
                        className: R().truncate,
                        children: e3.label
                      }),
                      void 0 !== e3.step ? (0, a.jsxs)("span", {
                        className: R().eventStep,
                        children: ["Step ", U(e3.step)]
                      }) : null
                    ]
                  },
                  e3.id
                );
              })
            }) : (0, a.jsx)("li", {
              className: R().eventEmpty,
              children: "Evals and checkpoints show here"
            })
          })
        }),
        (0, a.jsxs)("footer", {
          className: R().footer,
          children: [
            (0, a.jsx)(Z, {
              id: eT.key,
              className: R().infoSlot,
              reduced: Q2,
              children: (0, a.jsx)("span", {
                className: R().info,
                "data-tone": eT.tone,
                children: eT.body
              })
            }),
            (0, a.jsxs)("div", {
              className: R().actions,
              children: [
                (0, a.jsx)(et, { action: eO, reduced: Q2 }),
                (0, a.jsx)(et, { action: ez, reduced: Q2 })
              ]
            })
          ]
        }),
        (0, a.jsx)("span", {
          className: R().srOnly,
          role: "status",
          children: [eI, D2].filter(Boolean).join(". ")
        })
      ]
    });
  }
  var ea = n(58922), er = n.n(ea);
  let es = [
    { value: "healthy", label: "Healthy run" },
    { value: "oom", label: "Out of memory" }
  ];
  function ei() {
    let [e2, t2] = (0, r.useState)("healthy");
    return (0, a.jsxs)("div", {
      className: er().demo,
      children: [
        (0, a.jsx)(X, { scenario: e2 }, e2),
        (0, a.jsx)(s.A, {
          label: "Scenario",
          options: es,
          value: e2,
          onValueChange: (e3) => t2(e3)
        })
      ]
    });
  }
  let el = ei;
}

__m(__module,__exports,__require);
}