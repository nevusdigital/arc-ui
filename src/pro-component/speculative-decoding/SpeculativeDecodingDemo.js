function(__module,__exports,__require){
"use strict";
function __m(e, t, s) {
  "use strict";
  s.r(t), s.d(t, { SpeculativeDecodingDemo: () => V, default: () => Y });
  var a = s(95155), n = s(12115), i = s(25354), r = s(80642), l = s(18310), c = s(92171), d = s(64577), o = s(9005), u = s(2125), p = s(79267), h = s(36619), m = s(92298), x = s(35484), g = s(7770), _ = s(51288), f = s(94274), v = s(50680), j = s(52898), b = s(36690);
  let N = [
    { text: "Your", ease: 0.92, miss: "The" },
    { text: " preview", ease: 0.55, miss: " latest" },
    { text: " deploy", ease: 0.9, miss: " build" },
    { text: " finished", ease: 0.8, miss: " completed" },
    { text: " in", ease: 0.97, miss: " after" },
    { text: " 42", ease: 0.3, miss: " 38" },
    { text: " seconds", ease: 0.95, miss: " minutes" },
    { text: ",", ease: 0.85, miss: " and" },
    { text: " and", ease: 0.9, miss: " so" },
    { text: " all", ease: 0.7, miss: " the" },
    { text: " 318", ease: 0.25, miss: " 300" },
    { text: " checks", ease: 0.85, miss: " tests" },
    { text: " passed", ease: 0.9, miss: " ran" },
    { text: ",", ease: 0.8, miss: "." },
    { text: " so", ease: 0.65, miss: " and" },
    { text: " the", ease: 0.92, miss: " your" },
    { text: " branch", ease: 0.6, miss: " pull" },
    { text: " is", ease: 0.95, miss: " can" },
    { text: " ready", ease: 0.9, miss: " safe" },
    { text: " to", ease: 0.97, miss: " for" },
    { text: " merge", ease: 0.85, miss: " ship" },
    { text: ".", ease: 0.95, miss: " now" }
  ], y = [" the", " a", " and", ",", " to", " of"], w = (e2, t2) => e2.miss ?? y[t2 % y.length];
  function k(e2, t2, s2 = 12) {
    let a2 = [], n2 = Math.max(0, Math.round(t2)), i2 = 0;
    for (; i2 < e2.length; ) {
      let t3 = Math.min(n2, e2.length - i2 - 1), r2 = 0;
      for (; r2 < t3 && (function(e3, t4, s3) {
        let a3 = (Math.imul(e3 + 1, 2654435761) ^ Math.imul(t4 + 1, 374761393) ^ Math.imul(s3 + 7, 668265263)) >>> 0;
        return a3 = Math.imul(
          (a3 = Math.imul(a3 ^ a3 >>> 15, 2246822519)) ^ a3 >>> 13,
          3266489917
        ), ((a3 ^= a3 >>> 16) >>> 0) / 4294967296;
      })(s2, i2 + r2, r2) < (e2[i2 + r2].ease ?? 0.8) * Math.pow(0.95, r2); )
        r2 += 1;
      let l2 = Array.from({ length: t3 }, (t4, s3) => {
        let a3 = i2 + s3;
        return s3 === r2 ? w(e2[a3], a3) : e2[a3].text;
      });
      a2.push({ draft: l2, accepted: r2, target: e2[i2 + r2].text }), i2 += r2 + 1;
    }
    return a2;
  }
  function $(e2, t2 = 0.1) {
    let s2 = [], a2 = [], n2 = 0, i2 = 0, r2 = 0;
    e2.forEach((e3, l3) => {
      let c2 = e3.draft.slice(), d2 = Math.max(0, Math.min(c2.length, Math.round(e3.accepted))), o2 = n2 + c2.length * t2;
      s2.push({
        draft: c2,
        accepted: d2,
        target: e3.target,
        index: l3,
        start: n2,
        verify: o2,
        settle: o2 + 0.72,
        end: o2 + 1,
        outStart: a2.length
      }), c2.slice(0, d2).forEach((e4) => a2.push({ text: e4, origin: "draft", round: l3 })), a2.push({ text: e3.target, origin: "target", round: l3 }), i2 += c2.length, r2 += d2, n2 = o2 + 1;
    });
    let l2 = a2.length;
    return {
      rounds: s2,
      output: a2,
      end: n2,
      stats: {
        passes: s2.length,
        drafted: i2,
        accepted: r2,
        tokens: l2,
        acceptance: i2 ? r2 / i2 : 0,
        tokensPerPass: s2.length ? l2 / s2.length : 0,
        speedup: n2 ? l2 / n2 : 1
      }
    };
  }
  function T(e2, t2) {
    let s2 = e2.output.length, a2 = -1;
    for (let s3 = 0; s3 < e2.rounds.length; s3 += 1)
      e2.rounds[s3].start <= t2 && (a2 = s3);
    let n2 = 0, i2 = 0;
    for (let s3 of e2.rounds) s3.settle <= t2 && (n2 += s3.accepted + 1, i2 += 1);
    let r2 = {
      emitted: n2,
      settled: i2,
      baseline: Math.max(0, Math.min(s2, Math.floor(t2 - 0.72) + 1)),
      specDone: t2 >= e2.end,
      baseDone: t2 >= s2,
      basePass: t2 > 0 ? Math.min(s2, Math.floor(t2) + 1) : 0
    };
    if (a2 < 0 || t2 <= 0)
      return {
        phase: "idle",
        round: -1,
        shown: 0,
        sweep: 0,
        verdicts: 0,
        targetShown: false,
        ...r2
      };
    let l2 = e2.rounds[a2], c2 = l2.draft.length;
    if (t2 >= e2.end)
      return {
        phase: "done",
        round: a2,
        shown: c2,
        sweep: c2,
        verdicts: c2,
        targetShown: true,
        ...r2
      };
    let d2 = c2 ? (l2.verify - l2.start) / c2 : 0, o2 = d2 ? Math.min(c2, Math.floor((t2 - l2.start) / d2) + 1) : 0, u2 = Math.max(0, Math.min(1, (t2 - l2.verify) / 0.4)), p2 = t2 < l2.verify ? 0 : u2 * c2, h2 = Math.min(c2, Math.floor(p2 + 0.45)), m2 = l2.accepted < c2 ? h2 > l2.accepted : u2 >= 1;
    return {
      phase: t2 < l2.verify ? "draft" : t2 < l2.settle ? "verify" : "settle",
      round: a2,
      shown: o2,
      sweep: p2,
      verdicts: h2,
      targetShown: m2,
      ...r2
    };
  }
  var M = s(81834), C = s.n(M);
  let D = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  function S({ value: e2, decimals: t2 = 0, suffix: s2, places: n2 = 1 }) {
    let [i2 = "", r2 = ""] = (null === e2 ? "" : e2.toFixed(t2)).split("."), l2 = Math.max(n2, i2.length), c2 = Array.from({ length: l2 }, (e3, t3) => {
      let s3 = l2 - 1 - t3, a2 = i2[i2.length - 1 - s3];
      return {
        key: `i${s3}`,
        digit: void 0 === a2 ? null : Number(a2),
        place: s3
      };
    });
    return (0, a.jsxs)("span", {
      className: C().number,
      "data-empty": null === e2 || void 0,
      "aria-hidden": "true",
      children: [
        (0, a.jsx)("span", { className: C().numberDash, children: "\u2013" }),
        (0, a.jsxs)("span", {
          className: C().numberValue,
          children: [
            c2.map(
              (e3) => (0, a.jsx)(
                "span",
                {
                  className: C().wheelSlot,
                  "data-off": null === e3.digit && e3.place > 0 || void 0,
                  children: (0, a.jsx)("span", {
                    className: C().wheel,
                    children: (0, a.jsx)("span", {
                      className: C().strip,
                      style: {
                        transform: `translateY(${-(10 * (e3.digit ?? 0))}%)`
                      },
                      children: D.map(
                        (e4) => (0, a.jsx)("span", { children: e4 }, e4)
                      )
                    })
                  })
                },
                e3.key
              )
            ),
            t2 > 0 && (0, a.jsx)("span", { children: "." }),
            [...r2.padEnd(t2, "0")].map(
              (e3, t3) => (0, a.jsx)(
                "span",
                {
                  className: C().wheelSlot,
                  children: (0, a.jsx)("span", {
                    className: C().wheel,
                    children: (0, a.jsx)("span", {
                      className: C().strip,
                      style: { transform: `translateY(${-(10 * Number(e3))}%)` },
                      children: D.map(
                        (e4) => (0, a.jsx)("span", { children: e4 }, e4)
                      )
                    })
                  })
                },
                `f${t3}`
              )
            ),
            s2 && (0, a.jsx)("span", { className: C().numberSuffix, children: s2 })
          ]
        })
      ]
    });
  }
  let R = [...g.T.ease.enter], P = { type: "spring", visualDuration: 0.32, bounce: 0 }, E = (e2, t2, s2) => Math.min(s2, Math.max(t2, e2)), L = (e2, t2, s2 = `${t2}s`) => `${e2} ${1 === e2 ? t2 : s2}`, z = (e2) => e2.trim() || "\u2423";
  function A(e2, t2, s2) {
    let [a2, i2] = (0, n.useState)(t2), r2 = void 0 !== e2;
    return [
      r2 ? e2 : a2,
      (0, n.useCallback)(
        (e3) => {
          r2 || i2(e3), s2?.(e3);
        },
        [r2, s2]
      )
    ];
  }
  function I({ children: e2, reduced: t2, className: s2 }) {
    let r2 = (0, n.useRef)(null), [l2, c2] = (0, n.useState)("auto");
    return (0, n.useLayoutEffect)(() => {
      let e3 = r2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => c2(e3.offsetHeight));
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.jsx)(i.PY1.div, {
      className: s2,
      initial: false,
      animate: { height: l2 },
      transition: t2 ? { duration: 0 } : g.T.spring.smooth,
      children: (0, a.jsx)("div", { ref: r2, children: e2 })
    });
  }
  function O({ id: e2, children: t2, reduced: s2, className: n2 }) {
    return (0, a.jsx)("span", {
      className: [C().swap, n2].filter(Boolean).join(" "),
      children: (0, a.jsx)(r.N, {
        initial: false,
        children: (0, a.jsx)(
          i.PY1.span,
          {
            initial: s2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: s2 ? 0 : g.T.duration.fast, ease: R }
            },
            exit: { opacity: 0, transition: { duration: 0.1 * !s2 } },
            children: t2
          },
          e2
        )
      })
    });
  }
  function F({
    tokens: e2 = N,
    rounds: t2,
    draftLength: s2,
    defaultDraftLength: y2 = 4,
    onDraftLengthChange: w2,
    compare: M2,
    defaultCompare: D2 = false,
    onCompareChange: B2,
    autoplay: W2 = true,
    seed: V2 = 12,
    draftCost: Y2 = 0.1,
    passDuration: G = 640,
    title: H = "Speculative decoding",
    draftLabel: K = "Draft model",
    draftDetail: Z = "Small, fast",
    targetLabel: J = "Target model",
    targetDetail: U = "Large",
    status: q = "ready",
    error: X,
    onRetry: Q,
    onComplete: ee,
    className: et,
    style: es
  }) {
    let ea, en, ei = (0, l.I)() ?? false, [er, el] = A(s2, y2, w2), [ec, ed] = A(M2, D2, B2), eo = E(Math.round(er), 2, 8), eu = JSON.stringify([t2 ?? e2, t2 ? 0 : eo, V2, Y2]), ep = (0, n.useMemo)(() => {
      let [e3, s3, a2, n2] = JSON.parse(eu);
      return $(t2 ? e3 : k(e3, s3, a2), n2);
    }, [eu]), eh = ep.output.length, em = ec ? Math.max(ep.end, eh) : ep.end, ex = "ready" === q && eh > 0, eg = (0, n.useMemo)(() => {
      var e3;
      let t3;
      return e3 = ep.output, t3 = [], e3.forEach((e4, s3) => {
        let a2 = /^\s/.test(e4.text);
        (!t3.length || a2) && t3.push({ space: a2, items: [] }), t3[t3.length - 1].items.push({
          index: s3,
          text: e4.text.replace(/^\s+/, "")
        });
      }), t3;
    }, [ep]), e_ = (0, n.useRef)({ signature: "", time: 0 }), ef = (0, n.useRef)({
      plan: ep,
      signature: eu,
      end: em,
      reduced: ei,
      passDuration: G,
      onComplete: ee
    });
    (0, n.useLayoutEffect)(() => {
      ef.current = {
        plan: ep,
        signature: eu,
        end: em,
        reduced: ei,
        passDuration: G,
        onComplete: ee
      };
    });
    let [ev, ej] = (0, n.useState)(() => ({ signature: eu, view: T(ep, 0) })), eb = ev.signature === eu ? ev.view : T(ep, 0), [eN, ey] = (0, n.useState)(false), [ew, ek] = (0, n.useState)(""), e$ = (0, n.useRef)(null), eT = (0, n.useCallback)(() => {
      let { plan: e3, signature: t3, reduced: s3 } = ef.current;
      e_.current.signature !== t3 && (e_.current = { signature: t3, time: 0 });
      let a2 = T(e3, e_.current.time);
      return e$.current?.style.setProperty(
        "--sweep",
        String(s3 ? a2.verdicts : Math.round(1e3 * a2.sweep) / 1e3)
      ), ej((e4) => {
        let s4;
        return e4.signature === t3 && (s4 = e4.view, s4.phase === a2.phase && s4.round === a2.round && s4.shown === a2.shown && s4.verdicts === a2.verdicts && s4.targetShown === a2.targetShown && s4.emitted === a2.emitted && s4.baseline === a2.baseline && s4.settled === a2.settled && s4.specDone === a2.specDone && s4.baseDone === a2.baseDone && s4.basePass === a2.basePass) ? e4 : { signature: t3, view: a2 };
      }), a2;
    }, []);
    (0, n.useEffect)(() => {
      if (!eN) return;
      let e3 = 0, t3 = performance.now(), s3 = (a2) => {
        let { end: n2, passDuration: i2, plan: r2 } = ef.current, l2 = Math.min(64, a2 - t3) / Math.max(120, i2);
        t3 = a2;
        let c2 = e_.current.time;
        e_.current.signature === ef.current.signature && (e_.current.time = Math.min(n2, c2 + l2));
        let d2 = eT();
        if (c2 < r2.end && e_.current.time >= r2.end && e_.current.signature === ef.current.signature) {
          ef.current.onComplete?.(r2.stats);
          let { passes: e4, tokens: t4, speedup: s4 } = r2.stats;
          ek(
            `Done. ${L(t4, "token")} in ${L(e4, "target pass", "target passes")}, ${s4.toFixed(1)} times faster than the target alone.`
          );
        }
        if (e_.current.time >= n2 && e_.current.signature === ef.current.signature) {
          d2.baseDone && n2 > r2.end && ek(
            `Target alone finished after ${L(r2.output.length, "pass", "passes")}.`
          ), ey(false);
          return;
        }
        e3 = requestAnimationFrame(s3);
      };
      return e3 = requestAnimationFrame(s3), () => cancelAnimationFrame(e3);
    }, [eN, eT]);
    let eM = (0, n.useRef)(null), eC = (0, n.useRef)(false);
    (0, n.useEffect)(() => {
      let e3 = eM.current;
      if (!e3 || !W2 || ei || !ex || eC.current || "u" < typeof IntersectionObserver)
        return;
      let t3 = new IntersectionObserver(
        ([e4]) => {
          e4?.isIntersecting && !eC.current && (eC.current = true, ey(true), t3.disconnect());
        },
        { threshold: 0.35 }
      );
      return t3.observe(e3), () => t3.disconnect();
    }, [W2, ei, ex]);
    let eD = (0, n.useRef)([]), eS = (0, n.useRef)(/* @__PURE__ */ new Map()), eR = (0, n.useRef)([]), eP = (0, n.useRef)(0), eE = (0, n.useCallback)(() => {
      eR.current.forEach((e3) => e3.stop()), eR.current = [], eD.current.forEach((e3) => {
        e3 && (e3.style.transform = "");
      });
    }, []);
    (0, n.useLayoutEffect)(() => {
      let e3 = eP.current, t3 = eb.emitted;
      if (eP.current = t3, t3 <= e3) {
        t3 < e3 && eE();
        return;
      }
      if (!ei)
        for (let s3 = e3; s3 < t3; s3 += 1) {
          let t4 = ep.output[s3], a2 = ep.rounds[t4?.round ?? -1], n2 = eD.current[s3];
          if (!t4 || !a2 || !n2) continue;
          let i2 = s3 - a2.outStart, r2 = eS.current.get(
            i2 < a2.accepted ? `${a2.index}:${i2}` : `${a2.index}:t`
          );
          if (!r2) continue;
          let l2 = r2.getBoundingClientRect(), d2 = n2.getBoundingClientRect(), o2 = Math.round(l2.left - d2.left), u2 = Math.round(l2.top + l2.height / 2 - (d2.top + d2.height / 2));
          Math.abs(o2) + Math.abs(u2) < 1 || (n2.style.transform = `translate(${o2}px, ${u2}px)`, eR.current.push(
            (0, c.i)(
              n2,
              { x: [o2, 0], y: [u2, 0] },
              { ...P, delay: Math.min(0.12, (s3 - e3) * 0.02) }
            )
          ));
        }
    }, [eb.emitted, ep, ei, eE]), (0, n.useEffect)(() => () => eR.current.forEach((e3) => e3.stop()), []);
    let eL = (0, n.useCallback)(
      (e3) => {
        eE(), e_.current = { signature: ef.current.signature, time: 0 }, eT(), ey(e3);
      },
      [eT, eE]
    ), ez = eb.specDone ? ep.stats : (function(e3, t3) {
      if (t3 <= 0) return null;
      let s3 = e3.rounds.slice(0, t3), a2 = s3.reduce((e4, t4) => e4 + t4.draft.length, 0), n2 = s3.reduce((e4, t4) => e4 + t4.accepted, 0), i2 = n2 + s3.length, r2 = s3[s3.length - 1].end;
      return {
        passes: s3.length,
        drafted: a2,
        accepted: n2,
        tokens: i2,
        acceptance: a2 ? n2 / a2 : 0,
        tokensPerPass: i2 / s3.length,
        speedup: i2 / r2
      };
    })(ep, eb.settled), eA = eb.round >= 0 && !eb.specDone ? ep.rounds[eb.round] : null, eI = eA?.draft.length ?? 0, eO = !!eA && eA.accepted === eI, eF = "settle" === eb.phase, eB = null;
    if ("loading" === q) ea = "Loading the decoding run", en = "loading";
    else if ("error" === q) ea = "The run could not load", en = "error";
    else if (eh)
      if (eb.specDone)
        eB = (0, a.jsx)(d.A, {
          className: C().statusCheck,
          size: 15,
          strokeWidth: 2,
          "aria-hidden": "true"
        }), ec && !eb.baseDone ? (ea = `Speculation done in ${L(ep.stats.passes, "pass", "passes")}, target alone still writing`, en = "done-racing") : ec ? (ea = `${L(ep.stats.passes, "pass", "passes")} with speculation, ${eh} without`, en = "done-both") : (ea = `Done in ${L(ep.stats.passes, "target pass", "target passes")}`, en = "done");
      else if (eA)
        if ("draft" === eb.phase)
          ea = eI ? `Draft model proposes ${L(eI, "token")}` : "Target writes the last token", en = `${eb.round}-draft`;
        else if ("verify" === eb.phase)
          ea = eI ? `Target checks ${1 === eI ? "it" : `all ${eI}`} in one pass` : "Target writes the last token", en = `${eb.round}-verify`;
        else if (eI)
          if (eO)
            ea = `All ${eI} accepted, plus a bonus token`, en = `${eb.round}-settle`;
          else if (0 === eA.accepted)
            ea = "First guess rejected, target writes its own", en = `${eb.round}-settle`;
          else {
            let e3;
            ea = `${eA.accepted} of ${eI} accepted, target fixes the ${["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"][(e3 = eA.accepted + 1) - 1] ?? `${e3}th`}`, en = `${eb.round}-settle`;
          }
        else
          ea = "Target wrote the last token", en = `${eb.round}-settle`;
      else
        ea = `Draft guesses ${eo} tokens ahead, target checks them in one pass`, en = `idle-${eo}`;
    else ea = "Nothing to decode yet", en = "empty";
    let eW = eA && eb.verdicts >= eI && "draft" !== eb.phase ? `Round ${eA.index + 1}. Draft proposed ${eA.draft.map(z).join(", ") || "nothing"}. Target accepted ${eA.accepted}${eO ? ` and added ${z(eA.target)}` : ` and wrote ${z(eA.target)} instead of ${z(eA.draft[eA.accepted])}`}.` : "", eV = eA ? Array.from({ length: Math.min(eb.shown, eI) }, (e3, t3) => {
      let s3 = t3 < eb.verdicts ? t3 < eA.accepted ? "accepted" : t3 === eA.accepted ? "rejected" : "discarded" : "ghost", n2 = t3 === eA.accepted;
      return (0, a.jsxs)(
        "div",
        {
          className: C().column,
          "data-state": s3,
          "data-leaving": eF || void 0,
          style: { "--j": t3 },
          children: [
            (0, a.jsx)("span", {
              className: C().chip,
              children: (0, a.jsxs)("span", {
                ref: (e4) => {
                  let s4 = `${eA.index}:${t3}`;
                  e4 ? eS.current.set(s4, e4) : eS.current.delete(s4);
                },
                className: C().chipText,
                children: [
                  (0, a.jsx)(j.n, {
                    active: "ghost" === s3 && !ei,
                    duration: 0.9,
                    children: z(eA.draft[t3])
                  }),
                  (0, a.jsx)("span", {
                    className: C().strike,
                    "aria-hidden": "true"
                  })
                ]
              })
            }),
            (0, a.jsxs)("span", {
              className: C().cell,
              children: [
                (0, a.jsx)("span", { className: C().fill }),
                n2 ? (0, a.jsxs)("span", {
                  className: C().cellContent,
                  "data-on": "rejected" === s3 && eb.targetShown || void 0,
                  children: [
                    (0, a.jsx)(o.A, {
                      className: C().missIcon,
                      size: 13,
                      strokeWidth: 2,
                      "aria-hidden": "true"
                    }),
                    (0, a.jsx)("span", {
                      ref: (e4) => {
                        let t4 = `${eA.index}:t`;
                        e4 ? eS.current.set(t4, e4) : eS.current.delete(t4);
                      },
                      className: C().targetText,
                      children: z(eA.target)
                    })
                  ]
                }) : (0, a.jsx)("span", {
                  className: C().cellContent,
                  "data-on": "accepted" === s3 || void 0,
                  children: (0, a.jsx)(d.A, {
                    className: C().hitIcon,
                    size: 14,
                    strokeWidth: 2,
                    "aria-hidden": "true"
                  })
                })
              ]
            })
          ]
        },
        `${eA.index}:${t3}`
      );
    }) : [];
    eA && eO && eb.targetShown && eV.push(
      (0, a.jsxs)(
        "div",
        {
          className: C().column,
          "data-state": "bonus",
          "data-leaving": eF || void 0,
          children: [
            (0, a.jsx)("span", { className: C().chip, "data-empty": "" }),
            (0, a.jsx)("span", {
              className: C().cell,
              children: (0, a.jsxs)("span", {
                className: C().cellContent,
                "data-on": "",
                children: [
                  eI > 0 && (0, a.jsx)(u.A, {
                    className: C().bonusIcon,
                    size: 13,
                    strokeWidth: 2,
                    "aria-hidden": "true"
                  }),
                  (0, a.jsx)("span", {
                    ref: (e3) => {
                      let t3 = `${eA.index}:t`;
                      e3 ? eS.current.set(t3, e3) : eS.current.delete(t3);
                    },
                    className: C().targetText,
                    children: z(eA.target)
                  })
                ]
              })
            })
          ]
        },
        `${eA.index}:bonus`
      )
    );
    let eY = eb.specDone ? L(ep.stats.passes, "pass", "passes") : L(eb.settled, "pass", "passes"), eG = L(eb.baseline, "pass", "passes"), eH = !ex;
    return (0, a.jsx)("div", {
      className: [C().root, et].filter(Boolean).join(" "),
      style: es,
      children: (0, a.jsxs)("div", {
        ref: eM,
        className: C().card,
        role: "group",
        "aria-label": H,
        "data-status": ex ? "ready" : eh ? q : "empty",
        "data-reduced": ei || void 0,
        children: [
          (0, a.jsxs)("div", {
            className: C().header,
            children: [
              (0, a.jsxs)("div", {
                className: C().heading,
                children: [
                  (0, a.jsx)("p", { className: C().title, children: H }),
                  (0, a.jsx)("p", {
                    className: C().status,
                    children: "loading" === q ? (0, a.jsx)(j.n, { children: ea }) : (0, a.jsxs)(O, {
                      id: en,
                      reduced: ei,
                      className: C().statusLine,
                      children: [eB, ea]
                    })
                  })
                ]
              }),
              (0, a.jsxs)("div", {
                className: C().actions,
                children: [
                  (0, a.jsx)(b.m, {
                    content: eN ? "Pause" : eb.specDone && (!ec || eb.baseDone) ? "Play again" : "Play",
                    children: (0, a.jsx)("button", {
                      type: "button",
                      className: C().iconButton,
                      onClick: () => {
                        if (ex) {
                          if (eN) {
                            ey(false), ek("Paused");
                            return;
                          }
                          if (e_.current.signature === eu && e_.current.time >= em) {
                            eL(true), ek("Playing from the start");
                            return;
                          }
                          ey(true), ek("Playing");
                        }
                      },
                      disabled: eH,
                      "aria-label": eN ? "Pause" : "Play",
                      children: (0, a.jsxs)("span", {
                        className: C().iconStack,
                        "aria-hidden": "true",
                        children: [
                          (0, a.jsx)(p.A, {
                            "data-on": eN || void 0,
                            size: 15,
                            strokeWidth: 1.75
                          }),
                          (0, a.jsx)(h.A, {
                            "data-on": !eN || void 0,
                            size: 15,
                            strokeWidth: 1.75
                          })
                        ]
                      })
                    })
                  }),
                  (0, a.jsx)(b.m, {
                    content: "Restart",
                    children: (0, a.jsx)("button", {
                      type: "button",
                      className: C().iconButton,
                      onClick: () => {
                        eL(true), ek("Restarted");
                      },
                      disabled: eH,
                      "aria-label": "Restart",
                      children: (0, a.jsx)(m.A, {
                        size: 15,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    })
                  })
                ]
              })
            ]
          }),
          0 === eh ? (0, a.jsxs)("div", {
            className: C().empty,
            children: [
              (0, a.jsx)("p", {
                className: C().emptyTitle,
                children: "No tokens to decode"
              }),
              (0, a.jsx)("p", {
                className: C().emptyText,
                children: "Pass the target model's answer as tokens, or a recorded run as rounds."
              })
            ]
          }) : (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: C().lanes,
                children: [
                  (0, a.jsxs)("div", {
                    className: C().laneLabels,
                    "aria-hidden": "true",
                    children: [
                      (0, a.jsxs)("div", {
                        className: C().laneLabel,
                        "data-lane": "draft",
                        children: [
                          (0, a.jsx)("span", { className: C().laneDot }),
                          (0, a.jsxs)("span", {
                            className: C().laneText,
                            children: [
                              (0, a.jsx)("span", {
                                className: C().laneName,
                                children: K
                              }),
                              (0, a.jsx)("span", {
                                className: C().laneDetail,
                                children: Z
                              })
                            ]
                          })
                        ]
                      }),
                      (0, a.jsxs)("div", {
                        className: C().laneLabel,
                        "data-lane": "target",
                        children: [
                          (0, a.jsx)("span", { className: C().laneDot }),
                          (0, a.jsxs)("span", {
                            className: C().laneText,
                            children: [
                              (0, a.jsx)("span", {
                                className: C().laneName,
                                children: J
                              }),
                              (0, a.jsx)("span", {
                                className: C().laneDetail,
                                children: U
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  (0, a.jsx)(I, {
                    reduced: ei,
                    className: C().track,
                    children: (0, a.jsx)("div", {
                      ref: e$,
                      className: C().columns,
                      "data-phase": eb.phase,
                      "aria-hidden": "true",
                      children: eb.specDone ? (0, a.jsxs)("div", {
                        className: C().summary,
                        children: [
                          (0, a.jsx)("span", {
                            className: C().summaryRow,
                            children: `${L(ep.stats.drafted, "token")} drafted, ${ep.stats.accepted} accepted`
                          }),
                          (0, a.jsx)("span", {
                            className: C().summaryRow,
                            children: `${L(ep.stats.passes, "pass", "passes")} for ${L(eh, "token")}`
                          })
                        ]
                      }) : eA ? eV : Array.from(
                        { length: t2 ? 0 : eo },
                        (e3, t3) => (0, a.jsxs)(
                          "div",
                          {
                            className: C().column,
                            "data-state": "slot",
                            children: [
                              (0, a.jsx)("span", {
                                className: C().chip
                              }),
                              (0, a.jsx)("span", {
                                className: C().cell
                              })
                            ]
                          },
                          `slot${t3}`
                        )
                      )
                    })
                  }),
                  (0, a.jsx)("p", { className: C().srOnly, children: eW })
                ]
              }),
              "error" === q && (0, a.jsxs)("div", {
                className: C().alert,
                role: "alert",
                children: [
                  (0, a.jsx)(x.A, {
                    className: C().alertIcon,
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  (0, a.jsx)("span", {
                    className: C().alertText,
                    children: X ?? "Could not load the decoding run."
                  }),
                  Q && (0, a.jsx)(_.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: Q,
                    children: "Retry"
                  })
                ]
              }),
              (0, a.jsxs)("div", {
                className: C().outputs,
                children: [
                  (0, a.jsxs)("div", {
                    className: C().line,
                    "data-line": "spec",
                    children: [
                      (0, a.jsxs)("div", {
                        className: C().lineLabel,
                        children: [
                          (0, a.jsx)(O, {
                            id: ec ? "spec" : "out",
                            reduced: ei,
                            className: C().lineName,
                            children: ec ? "Speculative" : "Output"
                          }),
                          (0, a.jsxs)("span", {
                            className: C().lineMeta,
                            children: [
                              eb.specDone && (0, a.jsx)(d.A, {
                                className: C().metaCheck,
                                size: 13,
                                strokeWidth: 2,
                                "aria-hidden": "true"
                              }),
                              eY
                            ]
                          })
                        ]
                      }),
                      (0, a.jsx)("p", {
                        className: C().lineText,
                        "aria-label": `Output: ${ep.output.slice(0, eb.emitted).map((e3) => e3.text).join("").trim() || "empty"}`,
                        children: eg.map(
                          (e3, t3) => (0, a.jsxs)(
                            n.Fragment,
                            {
                              children: [
                                t3 > 0 && e3.space ? " " : null,
                                (0, a.jsx)("span", {
                                  className: C().word,
                                  children: e3.items.map(
                                    (e4) => (0, a.jsx)(
                                      "span",
                                      {
                                        ref: (t4) => {
                                          eD.current[e4.index] = t4;
                                        },
                                        className: C().tok,
                                        "data-on": e4.index < eb.emitted || void 0,
                                        "data-origin": ep.output[e4.index].origin,
                                        "aria-hidden": "true",
                                        children: e4.text
                                      },
                                      e4.index
                                    )
                                  )
                                })
                              ]
                            },
                            t3
                          )
                        )
                      })
                    ]
                  }),
                  (0, a.jsx)(r.N, {
                    initial: false,
                    children: ec && (0, a.jsx)(
                      i.PY1.div,
                      {
                        className: C().baselineWrap,
                        initial: ei ? { opacity: 0 } : { height: 0, opacity: 0 },
                        animate: ei ? { opacity: 1 } : { height: "auto", opacity: 1 },
                        exit: ei ? { opacity: 0, transition: { duration: 0.1 } } : {
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: g.T.spring.smooth,
                            opacity: { duration: 0.12 }
                          }
                        },
                        transition: {
                          height: g.T.spring.smooth,
                          opacity: {
                            duration: g.T.duration.fast,
                            ease: R
                          }
                        },
                        children: (0, a.jsxs)("div", {
                          className: C().line,
                          "data-line": "base",
                          children: [
                            (0, a.jsxs)("div", {
                              className: C().lineLabel,
                              children: [
                                (0, a.jsx)("span", {
                                  className: C().lineName,
                                  children: "Target only"
                                }),
                                (0, a.jsxs)("span", {
                                  className: C().lineMeta,
                                  children: [
                                    eb.baseDone && (0, a.jsx)(d.A, {
                                      className: C().metaCheck,
                                      size: 13,
                                      strokeWidth: 2,
                                      "aria-hidden": "true"
                                    }),
                                    eG
                                  ]
                                })
                              ]
                            }),
                            (0, a.jsx)("p", {
                              className: C().lineText,
                              "aria-label": `Target only: ${ep.output.slice(0, eb.baseline).map((e3) => e3.text).join("").trim() || "empty"}`,
                              children: eg.map(
                                (e3, t3) => (0, a.jsxs)(
                                  n.Fragment,
                                  {
                                    children: [
                                      t3 > 0 && e3.space ? " " : null,
                                      (0, a.jsx)("span", {
                                        className: C().word,
                                        children: e3.items.map(
                                          (e4) => (0, a.jsx)(
                                            "span",
                                            {
                                              className: C().tok,
                                              "data-on": e4.index < eb.baseline || void 0,
                                              "data-origin": "target",
                                              "aria-hidden": "true",
                                              children: e4.text
                                            },
                                            e4.index
                                          )
                                        )
                                      })
                                    ]
                                  },
                                  t3
                                )
                              )
                            })
                          ]
                        })
                      },
                      "baseline"
                    )
                  })
                ]
              }),
              (0, a.jsxs)("div", {
                className: C().footer,
                children: [
                  (0, a.jsxs)("dl", {
                    className: C().stats,
                    children: [
                      (0, a.jsxs)("div", {
                        className: C().stat,
                        children: [
                          (0, a.jsx)("dt", {
                            className: C().statLabel,
                            children: "Faster"
                          }),
                          (0, a.jsxs)("dd", {
                            className: C().statValue,
                            children: [
                              (0, a.jsx)(S, {
                                value: ez ? ez.speedup : null,
                                decimals: 1,
                                suffix: "\xD7"
                              }),
                              (0, a.jsx)("span", {
                                className: C().srOnly,
                                children: ez ? `${ez.speedup.toFixed(1)} times` : "not yet"
                              })
                            ]
                          })
                        ]
                      }),
                      (0, a.jsxs)("div", {
                        className: C().stat,
                        children: [
                          (0, a.jsx)("dt", {
                            className: C().statLabel,
                            children: "Drafts accepted"
                          }),
                          (0, a.jsxs)("dd", {
                            className: C().statValue,
                            children: [
                              (0, a.jsx)(S, {
                                value: ez ? Math.round(100 * ez.acceptance) : null,
                                places: 3,
                                suffix: "%"
                              }),
                              (0, a.jsx)("span", {
                                className: C().srOnly,
                                children: ez ? `${Math.round(100 * ez.acceptance)} percent` : "not yet"
                              })
                            ]
                          })
                        ]
                      }),
                      (0, a.jsxs)("div", {
                        className: C().stat,
                        children: [
                          (0, a.jsx)("dt", {
                            className: C().statLabel,
                            children: "Tokens per pass"
                          }),
                          (0, a.jsxs)("dd", {
                            className: C().statValue,
                            children: [
                              (0, a.jsx)(S, {
                                value: ez ? ez.tokensPerPass : null,
                                decimals: 1
                              }),
                              (0, a.jsx)("span", {
                                className: C().srOnly,
                                children: ez ? ez.tokensPerPass.toFixed(1) : "not yet"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  (0, a.jsxs)("div", {
                    className: C().controls,
                    children: [
                      !t2 && (0, a.jsx)("div", {
                        className: C().sliderSlot,
                        children: (0, a.jsx)(f.A, {
                          label: "Draft length",
                          min: 2,
                          max: 8,
                          step: 1,
                          value: eo,
                          onValueChange: (e3) => {
                            let t3 = E(Math.round(e3), 2, 8);
                            t3 !== eo && (el(t3), eE(), e_.current = { signature: "", time: 0 }, ey(ex));
                          },
                          onValueCommit: (t3) => {
                            let s3 = $(
                              k(e2, E(Math.round(t3), 2, 8), V2),
                              Y2
                            ).stats;
                            ek(
                              `Draft length ${t3}. ${Math.round(100 * s3.acceptance)} percent of drafts accepted, ${s3.speedup.toFixed(1)} times faster.`
                            );
                          },
                          format: (e3) => L(e3, "token"),
                          disabled: eH
                        })
                      }),
                      (0, a.jsx)(v.d, {
                        label: "Compare without speculation",
                        checked: ec,
                        onCheckedChange: (e3) => {
                          ed(e3);
                          let t3 = e_.current.signature === eu ? e_.current.time : 0, s3 = e3 ? Math.max(ep.end, eh) : ep.end;
                          e3 && t3 >= ep.end && t3 < s3 && ey(true), !e3 && t3 >= ep.end && ey(false), ek(
                            e3 ? "Comparing against the target alone, one token per pass." : "Comparison hidden."
                          );
                        },
                        disabled: eH,
                        className: C().switch
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, a.jsx)("p", {
            className: C().srOnly,
            "aria-live": "polite",
            children: ew
          })
        ]
      })
    });
  }
  var B = s(75539), W = s.n(B);
  function V() {
    return (0, a.jsx)("div", {
      className: W().demo,
      children: (0, a.jsx)(F, {})
    });
  }
  let Y = V;
}

__m(__module,__exports,__require);
}