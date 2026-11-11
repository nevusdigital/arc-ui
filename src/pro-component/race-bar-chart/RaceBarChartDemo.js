function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { RaceBarChartDemo: () => z, default: () => V });
  var r = a(95155), i = a(12115), l = a(18310), n = a(61792), s = a(28245), o = a(22535), c = a(80642), d = a(25354), u = a(79267), h = a(92298), m = a(36619), p = a(7770), b = a(91780), f = a.n(b);
  let { spring: x, ease: _, blur: y, duration: g } = p.T, v = ({ visualDuration: e2, bounce: t2 }) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return { k: a2 * a2, c: 2 * (1 - t2) * a2 };
  }, w = v({ visualDuration: 0.5, bounce: 0 }), M = v({ visualDuration: 0.42, bounce: 0 }), j = v(x.snappy), k = { stiffness: j.k, damping: j.c, restDelta: 0.01 }, N = (e2) => e2 < 0 ? "var(--series-1)" : e2 < 4 ? `var(--series-${e2 + 1})` : "color-mix(in oklab, var(--foreground) 45%, var(--surface))", R = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1
  }), D = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 1,
    signDisplay: "exceptZero"
  }), P = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), $ = {
    hidden: (e2) => ({
      opacity: 0,
      y: `${0.4 * e2}em`,
      filter: `blur(${y.soft}px)`
    }),
    shown: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: g.standard, ease: [..._.enter] }
    },
    gone: (e2) => ({
      opacity: 0,
      y: `${-0.4 * e2}em`,
      filter: `blur(${y.subtle}px)`,
      transition: { duration: g.exit, ease: [..._.standard] }
    })
  }, F = {
    hidden: { opacity: 0 },
    shown: { opacity: 1, transition: { duration: g.fast } },
    gone: { opacity: 0, transition: { duration: g.instant } }
  }, S = () => () => {
  };
  function E({
    items: e2,
    groups: t2,
    frames: a2,
    label: p2,
    formatValue: b2 = (e3) => R.format(e3),
    formatTick: _2 = (e3) => R.format(e3),
    bars: g2 = 8,
    frame: v2,
    defaultFrame: j2 = 0,
    onFrameChange: I2,
    playing: T2,
    defaultPlaying: A2 = false,
    onPlayingChange: C2,
    autoPlay: L2 = true,
    frameDuration: O2 = 1400,
    loop: W2 = false,
    highlight: z2,
    ref: V2,
    className: B
  }) {
    let q, X, Y, G, U, J, Z = (q = (0, i.useSyncExternalStore)(
      S,
      () => true,
      () => false
    ), !!(0, l.I)() && q), H = (0, i.useRef)(null), K = (0, i.useRef)(null), Q = (0, i.useRef)(null), ee = (0, i.useRef)(null), et = (0, i.useRef)(null), ea = (0, i.useRef)(null), er = (0, i.useRef)(null), ei = (0, i.useRef)(/* @__PURE__ */ new Map()), el = (0, i.useRef)(/* @__PURE__ */ new Map());
    (0, i.useImperativeHandle)(V2, () => H.current);
    let en = (0, n.W)(H, { amount: 0.35 }), es = a2.length, eo = Math.max(0, es - 1), ec = Math.max(1, Math.min(g2, e2.length)), ed = (0, i.useMemo)(
      () => a2.map((t3) => e2.map((e3) => Math.max(0, t3.values[e3.id] ?? 0))),
      [a2, e2]
    ), eu = P(Math.round(v2 ?? j2), 0, eo), [eh, em] = (0, i.useState)(eu), [ep, eb] = (0, i.useState)(A2), ef = (T2 ?? ep) && es > 1, [ex, e_] = (0, i.useState)(null), [ey, eg] = (0, i.useState)(0), [ev, ew] = (0, i.useState)(""), [eM, ej] = (0, i.useState)(eu >= eo), ek = ey > 0 && ey < 400, eN = ek ? 0 : ey < 520 ? 104 : 128, eR = new Map((t2 ?? []).map((e3, t3) => [e3.id, t3])), eD = (0, i.useRef)({
      time: eu,
      shown: eu,
      v: 0,
      hold: 0,
      step: 0,
      raf: 0,
      last: 0,
      index: eu,
      bars: [],
      ticks: /* @__PURE__ */ new Map(),
      scrubbing: false,
      tipOn: false,
      atEnd: eu >= eo
    }), eP = (0, s.d)(0), e$ = (0, s.d)(0), eF = (0, o.z)(eP, k), eS = (0, o.z)(e$, k), eE = (e3) => {
      void 0 === T2 && eb(e3), C2?.(e3);
    }, eI = ef && en, eT = (0, i.useRef)({
      matrix: ed,
      items: e2,
      shown: ec,
      isPlaying: eI,
      reduced: Z,
      frameDuration: O2,
      loop: W2,
      width: ey,
      labelWidth: eN,
      formatValue: b2,
      formatTick: _2,
      active: ex,
      count: es,
      setPlay: eE,
      onFrameChange: I2
    });
    (0, i.useLayoutEffect)(() => {
      eT.current = {
        matrix: ed,
        items: e2,
        shown: ec,
        isPlaying: eI,
        reduced: Z,
        frameDuration: O2,
        loop: W2,
        width: ey,
        labelWidth: eN,
        formatValue: b2,
        formatTick: _2,
        active: ex,
        count: es,
        setPlay: eE,
        onFrameChange: I2
      };
    });
    let eA = (0, i.useRef)(() => {
    });
    (0, i.useEffect)(() => {
      let e3 = eD.current, t3 = (a4) => {
        let r2 = e3.last ? Math.min(0.05, (a4 - e3.last) / 1e3) : 1 / 60;
        e3.last = a4, ((t4) => {
          let a5 = eT.current, r3 = a5.count, i2 = Math.max(0, r3 - 1);
          if (!r3) return false;
          if (a5.isPlaying && !e3.scrubbing && (e3.time >= i2 - 1e-6 ? (e3.hold += 1e3 * t4, e3.hold >= 0.9 * a5.frameDuration && (e3.hold = 0, a5.loop ? e3.time = 0 : a5.setPlay(false))) : a5.reduced ? (e3.step += 1e3 * t4, e3.step >= a5.frameDuration && (e3.step = 0, e3.time = Math.min(
            i2,
            Math.floor(e3.time + 1e-6) + 1
          ))) : e3.time = Math.min(
            i2,
            e3.time + 1e3 * t4 / a5.frameDuration
          )), a5.reduced)
            e3.shown = e3.time, e3.v = 0;
          else {
            let a6 = -M.k * (e3.shown - e3.time) - M.c * e3.v;
            e3.v += a6 * t4, e3.shown += e3.v * t4, 1e-4 > Math.abs(e3.shown - e3.time) && 1e-3 > Math.abs(e3.v) && (e3.shown = e3.time, e3.v = 0);
          }
          let l2 = P(e3.shown, 0, i2), n2 = Math.floor(l2), s2 = Math.min(i2, n2 + 1), o2 = l2 - n2, c2 = a5.items.map((e4, t5) => {
            let r4 = a5.matrix[n2]?.[t5] ?? 0;
            return r4 + ((a5.matrix[s2]?.[t5] ?? 0) - r4) * o2;
          }), d2 = c2.map((e4, t5) => t5).sort((e4, t5) => c2[t5] - c2[e4] || e4 - t5), u2 = c2[d2[0]] || 1, h2 = a5.labelWidth ? a5.labelWidth + 12 : 0, m2 = Math.max(40, a5.width - h2 - 64), p3 = a5.isPlaying || e3.shown !== e3.time, b3 = 0;
          if (d2.forEach((r4, i3) => {
            let l3 = a5.items[r4], n3 = e3.bars[r4];
            n3 || (n3 = e3.bars[r4] = {
              y: 36 * Math.min(i3, a5.shown),
              vy: 0,
              o: +(i3 < a5.shown),
              rank: i3,
              value: 0
            });
            let s3 = 36 * Math.min(i3, a5.shown), o3 = +(i3 < a5.shown);
            if (a5.reduced) n3.y = s3, n3.vy = 0, n3.o = o3;
            else {
              let e4 = Math.max(1, Math.ceil(t4 / (1 / 120))), a6 = t4 / e4;
              for (let t5 = 0; t5 < e4; t5++) {
                let e5 = -w.k * (n3.y - s3) - w.c * n3.vy;
                n3.vy += e5 * a6, n3.y += n3.vy * a6;
              }
              0.05 > Math.abs(n3.y - s3) && 0.05 > Math.abs(n3.vy) ? (n3.y = s3, n3.vy = 0) : p3 = true, n3.o += (o3 - n3.o) * Math.min(1, 9 * t4), 0.01 > Math.abs(n3.o - o3) ? n3.o = o3 : p3 = true;
            }
            n3.rank = i3, n3.value = c2[r4], b3 += c2[r4];
            let d3 = ei.current.get(l3.id);
            if (!d3) return;
            let f2 = Math.max(2, c2[r4] / u2 * m2);
            d3.style.transform = `translate3d(0, ${n3.y.toFixed(2)}px, 0)`, d3.style.opacity = n3.o.toFixed(3), d3.style.visibility = n3.o < 0.01 ? "hidden" : "visible", d3.style.zIndex = String(a5.items.length - i3);
            let x3 = d3.children[1], _4 = d3.children[2];
            x3.style.width = `${f2.toFixed(2)}px`;
            let y3 = a5.labelWidth ? f2 : Math.max(
              f2,
              (el.current.get(l3.id)?.offsetWidth ?? 0) + 16
            );
            _4.style.transform = `translate3d(${(h2 + y3 + 8).toFixed(2)}px, 0, 0)`;
            let g4 = a5.formatValue(c2[r4]);
            _4.textContent !== g4 && (_4.textContent = g4);
          }), et.current) {
            let e4 = `Total ${a5.formatValue(b3)}`;
            et.current.textContent !== e4 && (et.current.textContent = e4);
          }
          let x2 = Q.current;
          if (x2) {
            let t5 = (function(e4, t6 = 4) {
              let a6 = e4 / t6 || 1, r5 = Math.pow(10, Math.floor(Math.log10(a6))), i3 = a6 / r5;
              return (i3 >= 5 ? 5 : i3 >= 2 ? 2 : 1) * r5;
            })(u2, Math.max(1, Math.floor(m2 / 80))), r4 = /* @__PURE__ */ new Set();
            for (let e4 = t5; e4 <= 1.001 * u2; e4 += t5)
              r4.add(Math.round(1e6 * e4) / 1e6);
            for (let t6 of r4) {
              let r5 = e3.ticks.get(t6);
              if (!r5) {
                (r5 = document.createElement("div")).className = f().tick;
                let i3 = document.createElement("span");
                i3.className = f().tickLabel, i3.textContent = a5.formatTick(t6), r5.appendChild(i3), x2.appendChild(r5), e3.ticks.set(t6, r5), requestAnimationFrame(
                  () => r5?.setAttribute("data-on", "")
                );
              }
              r5.style.transform = `translate3d(${(h2 + t6 / u2 * m2).toFixed(2)}px, 0, 0)`;
            }
            for (let [t6, a6] of e3.ticks)
              r4.has(t6) || (e3.ticks.delete(t6), a6.removeAttribute("data-on"), a6.setAttribute("data-leaving", ""), window.setTimeout(() => a6.remove(), 320));
          }
          let _3 = i2 ? l2 / i2 : 0;
          ea.current && (ea.current.style.left = `${(100 * _3).toFixed(3)}%`), er.current && (er.current.style.transform = `scaleX(${_3.toFixed(4)})`);
          let y2 = a5.active ? a5.items.findIndex((e4) => e4.id === a5.active) : -1, g3 = ee.current;
          if (g3 && y2 >= 0 && e3.bars[y2]) {
            let t5 = e3.bars[y2], r4 = Math.max(2, t5.value / u2 * m2), i3 = g3.offsetWidth, l3 = g3.offsetHeight, n3 = h2 + r4, s3 = 26 + t5.y + 18, o3 = n3 + 12;
            o3 + i3 > a5.width && (o3 = n3 - i3 - 12);
            let c3 = s3 - l3 - 12;
            c3 < 0 && (c3 = s3 + 18 + 4), eP.set(P(o3, 0, Math.max(0, a5.width - i3))), e$.set(Math.max(0, c3)), (!e3.tipOn || a5.reduced) && (eF.jump(eP.get()), eS.jump(e$.get())), e3.tipOn = true;
          } else e3.tipOn = false;
          let v3 = P(Math.round(l2), 0, i2);
          v3 !== e3.index && (e3.index = v3, em(v3), a5.onFrameChange?.(v3));
          let j3 = e3.time >= i2 - 1e-6;
          return j3 !== e3.atEnd && (e3.atEnd = j3, ej(j3)), p3;
        })(r2) || eT.current.isPlaying || e3.scrubbing ? e3.raf = requestAnimationFrame(t3) : (e3.raf = 0, e3.last = 0);
      };
      eA.current = () => {
        e3.raf || (e3.last = 0, e3.raf = requestAnimationFrame(t3));
      };
      let a3 = e3.ticks;
      return eA.current(), () => {
        for (let t4 of (cancelAnimationFrame(e3.raf), e3.raf = 0, a3.values()))
          t4.remove();
        a3.clear();
      };
    }, [eF, eS, eP, e$]), (0, i.useEffect)(() => {
      eA.current();
    }, [eI, ey, ed, ex, eN, ec, Z]), (0, i.useEffect)(() => {
      if (void 0 === v2) return;
      let e3 = eD.current, t3 = P(Math.round(v2), 0, eo);
      (Math.round(e3.time) !== t3 || e3.time % 1) && (e3.time = t3, eA.current());
    }, [v2, eo]), (0, i.useLayoutEffect)(() => {
      let e3 = K.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => eg(e3.clientWidth));
      return t3.observe(e3), eg(e3.clientWidth), () => t3.disconnect();
    }, []);
    let eC = (0, i.useRef)(false);
    (0, i.useEffect)(() => {
      if (!en || eC.current || Z || !L2 || void 0 !== T2 || es < 2) return;
      eC.current = true;
      let e3 = eD.current;
      e3.time >= eo && (e3.time = 0), eE(true);
    });
    let eL = (t3, r2 = true) => {
      let i2 = eD.current, l2 = P(t3, 0, eo);
      if (i2.time = l2, i2.hold = 0, ef && eE(false), eA.current(), r2) {
        let t4 = ed[l2] ?? [], r3 = t4.map((e3, t5) => t5).sort((e3, a3) => t4[a3] - t4[e3])[0];
        ew(
          void 0 === r3 ? a2[l2]?.period ?? "" : `${a2[l2].period}. ${e2[r3].label} leads with ${b2(t4[r3])}.`
        );
      }
    }, eO = () => {
      let e3 = eD.current;
      ef ? eE(false) : (e3.time >= eo - 1e-6 && (e3.time = 0, e3.hold = 0), eE(true), eA.current());
    }, eW = (e3) => {
      let t3 = e3.currentTarget.getBoundingClientRect();
      eD.current.time = P((e3.clientX - t3.left) / Math.max(1, t3.width), 0, 1) * eo, eA.current();
    }, ez = () => {
      let e3 = eD.current;
      e3.scrubbing && (e3.scrubbing = false, eL(Math.round(e3.time)));
    }, [eV, eB] = (0, i.useState)(ex);
    null !== ex && ex !== eV && eB(ex);
    let eq = eV ? e2.findIndex((e3) => e3.id === eV) : -1, eX = eq >= 0 ? (Y = (X = ed[eh] ?? [])[eq] ?? 0, G = X.filter((e3, t3) => e3 > Y || e3 === Y && t3 < eq).length + 1, U = eh > 0 ? ed[eh - 1]?.[eq] ?? 0 : null, J = X.reduce((e3, t3) => e3 + t3, 0), {
      item: e2[eq],
      value: Y,
      rank: G,
      change: U ? (Y - U) / U : null,
      share: J ? Y / J : 0
    }) : null, eY = !es || !e2.length, eG = a2[eh]?.period ?? "";
    return (0, r.jsxs)("figure", {
      ref: H,
      className: [f().figure, B].filter(Boolean).join(" "),
      "aria-label": p2,
      "data-empty": eY || void 0,
      children: [
        (0, r.jsxs)("div", {
          className: f().head,
          "aria-hidden": "true",
          children: [
            (0, r.jsx)("span", {
              className: f().periodText,
              children: (0, r.jsx)(c.N, {
                mode: "popLayout",
                initial: false,
                custom: 1,
                children: (0, r.jsx)(
                  d.PY1.span,
                  {
                    className: f().periodWord,
                    custom: 1,
                    variants: Z ? F : $,
                    initial: "hidden",
                    animate: "shown",
                    exit: "gone",
                    children: eG
                  },
                  eG
                )
              })
            }),
            (0, r.jsx)("span", { ref: et, className: f().total })
          ]
        }),
        (0, r.jsxs)("div", {
          ref: K,
          className: f().plot,
          style: { height: 26 + 36 * ec + 4 },
          "data-active": null !== ex && eq >= 0 || void 0,
          role: "group",
          tabIndex: eY ? -1 : 0,
          "aria-roledescription": "bar chart race",
          "aria-label": `${p2}, ${eG}. Space plays or pauses, left and right arrows change the period, up and down arrows read the bars.`,
          onKeyDown: (t3) => {
            let a3 = eD.current, r2 = a3.bars.length ? e2.map((e3, t4) => ({ id: e3.id, rank: a3.bars[t4]?.rank ?? t4 })).sort((e3, t4) => e3.rank - t4.rank).slice(0, ec) : e2.slice(0, ec).map((e3, t4) => ({ id: e3.id, rank: t4 })), i2 = ex ? r2.findIndex((e3) => e3.id === ex) : -1, l2 = (e3) => {
              t3.preventDefault();
              let a4 = r2[P(e3, 0, r2.length - 1)];
              a4 && e_(a4.id);
            };
            "ArrowDown" === t3.key ? l2(i2 + 1) : "ArrowUp" === t3.key ? l2(i2 < 0 ? 0 : i2 - 1) : "ArrowRight" === t3.key ? (t3.preventDefault(), eL(Math.round(a3.time) + 1)) : "ArrowLeft" === t3.key ? (t3.preventDefault(), eL(Math.round(a3.time) - 1)) : "Home" === t3.key ? (t3.preventDefault(), eL(0)) : "End" === t3.key ? (t3.preventDefault(), eL(eo)) : " " === t3.key || "Enter" === t3.key ? (t3.preventDefault(), eO()) : "Escape" === t3.key && ex && (t3.preventDefault(), e_(null));
          },
          onPointerMove: (t3) => {
            if ("mouse" !== t3.pointerType) return;
            let a3 = t3.currentTarget.getBoundingClientRect(), r2 = t3.clientY - a3.top - 26, i2 = eD.current, l2 = null;
            i2.bars.forEach((t4, a4) => {
              t4.o > 0.5 && r2 >= t4.y && r2 < t4.y + 36 && e2[a4] && (l2 = e2[a4].id);
            }), e_(l2);
          },
          onPointerDown: (t3) => {
            if ("mouse" === t3.pointerType) return;
            let a3 = t3.currentTarget.getBoundingClientRect(), r2 = t3.clientY - a3.top - 26, i2 = eD.current, l2 = null;
            i2.bars.forEach((t4, a4) => {
              t4.o > 0.5 && r2 >= t4.y && r2 < t4.y + 36 && e2[a4] && (l2 = e2[a4].id);
            }), e_((e3) => e3 === l2 ? null : l2);
          },
          onPointerLeave: (e3) => {
            "mouse" === e3.pointerType && e_(null);
          },
          onBlur: () => e_(null),
          children: [
            (0, r.jsx)("div", {
              ref: Q,
              className: f().grid,
              "aria-hidden": "true",
              style: { height: 26 + 36 * ec }
            }),
            (0, r.jsx)("div", {
              className: f().baseline,
              style: { left: ek ? 0 : eN + 12, height: 36 * ec, top: 26 },
              "aria-hidden": "true"
            }),
            (0, r.jsx)("div", {
              className: f().rows,
              style: { top: 26 },
              "aria-hidden": "true",
              children: e2.map(
                (e3) => (0, r.jsxs)(
                  "div",
                  {
                    ref: (t3) => {
                      t3 ? ei.current.set(e3.id, t3) : ei.current.delete(e3.id);
                    },
                    className: f().row,
                    style: {
                      height: 36,
                      "--bar": N(eR.get(e3.group ?? "") ?? -1)
                    },
                    "data-highlight": e3.id === z2 || void 0,
                    "data-active": e3.id === ex || void 0,
                    "data-dim": null !== ex && e3.id !== ex || void 0,
                    children: [
                      (0, r.jsx)("span", {
                        ref: (t3) => {
                          t3 ? el.current.set(e3.id, t3) : el.current.delete(e3.id);
                        },
                        className: f().rowLabel,
                        style: ek ? { left: 8, maxWidth: "calc(100% - 96px)" } : { width: eN },
                        "data-inside": ek || void 0,
                        children: e3.label
                      }),
                      (0, r.jsx)("span", {
                        className: f().bar,
                        style: { left: ek ? 0 : eN + 12, height: 24, top: 6 }
                      }),
                      (0, r.jsx)("span", { className: f().rowValue })
                    ]
                  },
                  e3.id
                )
              )
            }),
            eY && (0, r.jsx)("p", {
              className: f().message,
              children: "No data yet"
            }),
            (0, r.jsx)(d.PY1.div, {
              ref: ee,
              className: f().tooltip,
              style: { x: Z ? eP : eF, y: Z ? e$ : eS },
              "aria-hidden": "true",
              children: eX && (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("p", {
                    className: f().tipTitle,
                    children: eX.item.label
                  }),
                  (0, r.jsx)("p", {
                    className: f().tipValue,
                    children: b2(eX.value)
                  }),
                  (0, r.jsxs)("p", {
                    className: f().tipNote,
                    children: [
                      "Rank ",
                      eX.rank,
                      " of ",
                      e2.length,
                      ", ",
                      D.format(eX.share).replace("+", ""),
                      " of total"
                    ]
                  }),
                  null !== eX.change && (0, r.jsxs)("p", {
                    className: f().tipNote,
                    children: [
                      D.format(eX.change),
                      " vs ",
                      a2[eh - 1]?.period
                    ]
                  })
                ]
              })
            })
          ]
        }),
        t2 && t2.length > 1 && (0, r.jsx)("ul", {
          className: f().legend,
          "aria-label": "Groups",
          children: t2.map(
            (e3, t3) => (0, r.jsxs)(
              "li",
              {
                className: f().legendItem,
                style: { "--bar": N(t3) },
                children: [
                  (0, r.jsx)("span", {
                    className: f().swatch,
                    "aria-hidden": "true"
                  }),
                  e3.label
                ]
              },
              e3.id
            )
          )
        }),
        (0, r.jsxs)("div", {
          className: f().controls,
          children: [
            (0, r.jsx)("button", {
              type: "button",
              className: f().play,
              onClick: eO,
              disabled: es < 2,
              "aria-label": ef ? "Pause" : eM ? "Replay from the start" : "Play",
              children: (0, r.jsx)(c.N, {
                mode: "popLayout",
                initial: false,
                children: (0, r.jsx)(
                  d.PY1.span,
                  {
                    className: f().playIcon,
                    initial: {
                      opacity: 0,
                      scale: Z ? 1 : 0.6,
                      filter: Z ? "none" : `blur(${y.subtle}px)`
                    },
                    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
                    exit: { opacity: 0, scale: Z ? 1 : 0.6 },
                    transition: x.snappy,
                    children: ef ? (0, r.jsx)(u.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      fill: "currentColor"
                    }) : eM ? (0, r.jsx)(h.A, { size: 16, strokeWidth: 1.75 }) : (0, r.jsx)(m.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      fill: "currentColor"
                    })
                  },
                  ef ? "pause" : eM ? "replay" : "play"
                )
              })
            }),
            (0, r.jsxs)("div", {
              className: f().timeline,
              children: [
                (0, r.jsxs)("div", {
                  className: f().track,
                  role: "slider",
                  tabIndex: eY ? -1 : 0,
                  "aria-label": `${p2}, period`,
                  "aria-valuemin": 0,
                  "aria-valuemax": eo,
                  "aria-valuenow": eh,
                  "aria-valuetext": eG,
                  onPointerDown: (e3) => {
                    es < 2 || (e3.currentTarget.setPointerCapture(e3.pointerId), eD.current.scrubbing = true, eD.current.hold = 0, ef && eE(false), eW(e3));
                  },
                  onPointerMove: (e3) => {
                    eD.current.scrubbing && eW(e3);
                  },
                  onPointerUp: ez,
                  onPointerCancel: ez,
                  onKeyDown: (e3) => {
                    let t3 = Math.round(eD.current.time), a3 = {
                      ArrowRight: t3 + 1,
                      ArrowUp: t3 + 1,
                      ArrowLeft: t3 - 1,
                      ArrowDown: t3 - 1,
                      Home: 0,
                      End: eo,
                      PageUp: t3 + 3,
                      PageDown: t3 - 3
                    };
                    e3.key in a3 ? (e3.preventDefault(), eL(a3[e3.key])) : " " === e3.key && (e3.preventDefault(), eO());
                  },
                  children: [
                    (0, r.jsx)("span", {
                      className: f().rail,
                      "aria-hidden": "true",
                      children: (0, r.jsx)("span", {
                        ref: er,
                        className: f().fill
                      })
                    }),
                    a2.map(
                      (e3, t3) => t3 > 0 && t3 < eo && (0, r.jsx)(
                        "span",
                        {
                          className: f().stop,
                          style: { left: `${eo ? t3 / eo * 100 : 0}%` },
                          "data-past": t3 <= eh || void 0,
                          "aria-hidden": "true"
                        },
                        e3.period
                      )
                    ),
                    (0, r.jsx)("span", {
                      ref: ea,
                      className: f().thumb,
                      "aria-hidden": "true"
                    })
                  ]
                }),
                (0, r.jsxs)("div", {
                  className: f().ends,
                  "aria-hidden": "true",
                  children: [
                    (0, r.jsx)("span", { children: a2[0]?.period }),
                    (0, r.jsx)("span", { children: a2[eo]?.period })
                  ]
                })
              ]
            })
          ]
        }),
        (0, r.jsx)("p", {
          className: f().srOnly,
          "aria-live": "polite",
          "aria-atomic": "true",
          children: eX && null !== ex ? `${eX.item.label}, rank ${eX.rank}, ${b2(eX.value)}` : ev
        }),
        !eY && (0, r.jsx)("div", {
          className: f().srOnly,
          children: (0, r.jsxs)("table", {
            children: [
              (0, r.jsx)("caption", { children: p2 }),
              (0, r.jsx)("thead", {
                children: (0, r.jsxs)("tr", {
                  children: [
                    (0, r.jsx)("th", { scope: "col", children: "Item" }),
                    a2.map(
                      (e3) => (0, r.jsx)(
                        "th",
                        { scope: "col", children: e3.period },
                        e3.period
                      )
                    )
                  ]
                })
              }),
              (0, r.jsx)("tbody", {
                children: e2.map(
                  (e3, t3) => (0, r.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, r.jsx)("th", { scope: "row", children: e3.label }),
                        ed.map(
                          (e4, a3) => (0, r.jsx)("td", { children: b2(e4[t3]) }, a3)
                        )
                      ]
                    },
                    e3.id
                  )
                )
              })
            ]
          })
        })
      ]
    });
  }
  var I = a(99844), T = a.n(I);
  let A = {
    "lounge-chair": [
      "Oak lounge chair",
      "furniture",
      [14, 16, 22, 34, 52, 70, 88, 104, 120, 138, 156, 178]
    ],
    "linen-throw": [
      "Linen throw",
      "textiles",
      [92, 78, 52, 34, 24, 16, 14, 16, 26, 48, 80, 118]
    ],
    "mushroom-lamp": [
      "Mushroom lamp",
      "lighting",
      [66, 62, 58, 54, 51, 48, 46, 50, 57, 68, 78, 90]
    ],
    "glass-carafe": [
      "Glass carafe",
      "tableware",
      [10, 12, 18, 30, 52, 84, 98, 90, 54, 26, 18, 30]
    ],
    "stoneware-cups": [
      "Stoneware cups",
      "tableware",
      [44, 42, 44, 41, 42, 40, 38, 40, 42, 45, 52, 70]
    ],
    "stacked-bowls": [
      "Stacked bowls",
      "tableware",
      [27, 26, 28, 29, 27, 28, 26, 27, 29, 30, 36, 47]
    ],
    "ceramic-lamp": [
      "Ceramic lamp",
      "lighting",
      [18, 20, 21, 20, 22, 21, 22, 24, 26, 28, 31, 34]
    ],
    "walnut-sideboard": [
      "Walnut sideboard",
      "furniture",
      [75, 63, 57, 51, 45, 39, 36, 33, 39, 45, 51, 54]
    ],
    "striped-pillow": [
      "Striped pillow",
      "textiles",
      [10, 11, 13, 16, 17, 18, 19, 17, 16, 16, 18, 23]
    ],
    "wool-rug": [
      "Wool rug",
      "textiles",
      [40, 34, 28, 20, 15, 11, 9, 11, 18, 30, 40, 50]
    ]
  }, C = [
    { id: "furniture", label: "Furniture" },
    { id: "lighting", label: "Lighting" },
    { id: "textiles", label: "Textiles" },
    { id: "tableware", label: "Tableware" }
  ], L = Object.entries(A).map(([e2, [t2, a2]]) => ({ id: e2, label: t2, group: a2 })), O = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ].map((e2, t2) => ({
    period: e2,
    values: Object.fromEntries(
      Object.entries(A).map(([e3, [, , a2]]) => [
        e3,
        1e3 * a2.slice(0, t2 + 1).reduce((e4, t3) => e4 + t3, 0)
      ])
    )
  })), W = (e2) => e2 >= 1e6 ? `$${(e2 / 1e6).toFixed(2)}M` : `$${Math.round(e2 / 1e3)}K`;
  function z() {
    let e2 = (0, i.useId)();
    return (0, r.jsxs)("section", {
      className: T().card,
      "aria-labelledby": e2,
      children: [
        (0, r.jsxs)("div", {
          className: T().heading,
          children: [
            (0, r.jsx)("h3", {
              id: e2,
              className: T().title,
              children: "Revenue by product"
            }),
            (0, r.jsx)("p", {
              className: T().meta,
              children: "Year to date, 2025"
            })
          ]
        }),
        (0, r.jsx)(E, {
          items: L,
          groups: C,
          frames: O,
          label: "Revenue by product, year to date 2025",
          formatValue: W,
          formatTick: W,
          bars: 8,
          highlight: "lounge-chair"
        })
      ]
    });
  }
  let V = z;
}

__m(__module,__exports,__require);
}