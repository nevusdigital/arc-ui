function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { PromptCacheDemo: () => Z, default: () => U });
  var r = a(95155), s = a(12115), n = a(18310), i = a(80642), l = a(25354), c = a(36619), o = a(79267), d = a(49804), h = a(92e3), u = a(58081), p = a(51811);
  let m = {
    name: "timer-off",
    size: 24,
    node: [
      ["path", { d: "M10 2h4", key: "n1abiw" }],
      [
        "path",
        { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7", key: "10he05" }
      ],
      [
        "path",
        { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2", key: "15f7sh" }
      ],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      ["path", { d: "M12 12v-2", key: "fwoke6" }]
    ]
  };
  m.node;
  let x = (0, p.A)(m);
  var f = a(23723), g = a(47059), _ = a(92298), y = a(7770), k = a(51288), b = a(52898), j = a(36690);
  let w = [
    "var(--series-3)",
    "var(--series-2)",
    "var(--series-4)",
    "var(--series-1)"
  ], v = [
    { id: "tools", label: "Tools", tokens: 3800 },
    { id: "system", label: "System prompt", tokens: 2400 },
    { id: "documents", label: "Documents", tokens: 36200 },
    { id: "conversation", label: "Conversation", tokens: 6e3 }
  ], N = [
    { message: "Which refunds are still pending this week?", tokens: 180 },
    {
      message: "Draft a reply to Northwind about their late refund",
      tokens: 240,
      gap: 42
    },
    {
      message: "Summarize ticket 48213 and the attached invoice",
      tokens: 410,
      gap: 35
    },
    {
      message: "Which customers asked about SSO in October?",
      tokens: 150,
      gap: 51
    }
  ], T = {
    name: "Claude Sonnet 5.5",
    mark: (0, r.jsx)(
      function({ title: e2 = "Claude", ...t2 }) {
        return (0, r.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, r.jsx)("path", {
            d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
          })
        });
      },
      {
        style: { color: "#D97757" },
        "aria-hidden": "true",
        focusable: "false"
      }
    ),
    inputPrice: 2,
    cacheWritePrice: 2.5,
    cacheReadPrice: 0.2
  }, $ = ({ processed: e2, cached: t2 }) => 0.42 + e2 / 4e4 + t2 / 5e5;
  function M({
    cache: e2,
    versions: t2,
    at: a2,
    roundAt: r2,
    index: s2,
    request: n2,
    segments: i2,
    model: l2,
    ttl: c2,
    changed: o2,
    firstToken: d2
  }) {
    let h2 = e2 && a2 < e2.expiresAt ? e2 : null, u2 = 0;
    if (h2) for (; u2 < i2.length && h2.versions[u2] === t2[u2]; ) u2++;
    let p2 = i2.reduce((e3, t3) => e3 + t3.tokens, 0), m2 = i2.slice(0, u2).reduce((e3, t3) => e3 + t3.tokens, 0), x2 = p2 - m2, f2 = Math.max(0, n2.tokens);
    return {
      result: {
        index: s2,
        at: a2 - r2,
        kind: u2 === i2.length ? "hit" : 0 === u2 ? "write" : "partial",
        breakAt: u2,
        cachedTokens: m2,
        writtenTokens: x2,
        processedTokens: x2 + f2,
        cost: (m2 * l2.cacheReadPrice + x2 * l2.cacheWritePrice + f2 * l2.inputPrice) / 1e6,
        uncachedCost: (p2 + f2) * l2.inputPrice / 1e6,
        firstToken: d2({ processed: x2 + f2, cached: m2 }),
        uncachedFirstToken: d2({ processed: p2 + f2, cached: 0 }),
        changed: o2,
        cold: !h2,
        message: n2.message
      },
      cache: { versions: [...t2], expiresAt: a2 + c2 }
    };
  }
  function S(e2) {
    let t2 = Math.max(0, e2);
    return t2 >= 1e6 ? `${+(t2 / 1e6).toFixed(2)}M` : t2 >= 1e3 ? `${+(t2 / 1e3).toFixed(1)}K` : `${Math.round(t2)}`;
  }
  let A = (e2) => `$${Math.max(0, e2).toFixed(4)}`, C = (e2) => `$${e2.toFixed(2)}`, R = (e2) => `${Math.max(0, e2).toFixed(2)}s`, q = (e2) => {
    let t2 = Math.max(0, Math.ceil(e2));
    return `${Math.floor(t2 / 60)}:${String(t2 % 60).padStart(2, "0")}`;
  }, P = (e2) => `${+e2.toFixed(2)}x`, E = (e2) => `${Math.round(Math.abs(e2))}%`, z = (e2) => `${e2.toFixed(1)}x`;
  function F(e2, t2 = false) {
    let a2 = (e3, a3) => `${+e3.toFixed(1)} ${a3}${1 === e3 || t2 ? "" : "s"}`;
    return e2 >= 3600 && e2 % 900 == 0 ? a2(e2 / 3600, "hour") : e2 >= 60 && e2 % 15 == 0 ? a2(e2 / 60, "minute") : a2(e2, "second");
  }
  var I = a(20626), L = a.n(I);
  let O = [...y.T.ease.standard], B = (e2) => e2.charAt(0).toLowerCase() + e2.slice(1), D = () => () => {
  };
  function W({ id: e2, children: t2, reduced: a2, className: s2 }) {
    return (0, r.jsx)("span", {
      className: [L().swap, s2].filter(Boolean).join(" "),
      children: (0, r.jsx)(i.N, {
        initial: false,
        children: (0, r.jsx)(
          l.PY1.span,
          {
            className: L().swapItem,
            initial: a2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: a2 ? 0.12 : 0.16, ease: O }
            },
            exit: { opacity: 0, transition: { duration: 0.1, ease: O } },
            children: t2
          },
          e2
        )
      })
    });
  }
  function H({ value: e2, from: t2, format: a2, reduced: n2, className: i2 }) {
    let l2 = (0, s.useRef)(null), c2 = (0, s.useRef)(null), [o2] = (0, s.useState)(() => null == e2 ? "\u2013" : a2(e2));
    return (0, s.useLayoutEffect)(() => {
      let r2 = l2.current?.firstChild;
      if (!r2) return;
      if (null == e2) {
        c2.current = null, r2.nodeValue = "\u2013";
        return;
      }
      let s2 = c2.current ?? t2 ?? 0;
      if (n2 || s2 === e2) {
        c2.current = e2, r2.nodeValue = a2(e2);
        return;
      }
      let i3 = performance.now(), o3 = 0, d2 = (t3) => {
        let n3 = Math.min(1, (t3 - i3) / 420), l3 = s2 + (e2 - s2) * (1 - (1 - n3) ** 3);
        c2.current = l3, r2.nodeValue = a2(l3), n3 < 1 && (o3 = requestAnimationFrame(d2));
      };
      return r2.nodeValue = a2(s2), o3 = requestAnimationFrame(d2), () => cancelAnimationFrame(o3);
    }, [e2, t2, a2, n2]), (0, r.jsx)("span", {
      ref: l2,
      className: i2,
      "data-empty": null == e2 || void 0,
      children: o2
    });
  }
  function G({ playing: e2 }) {
    return (0, r.jsxs)("span", {
      className: L().glyph,
      "aria-hidden": "true",
      children: [
        (0, r.jsx)(c.A, { "data-on": !e2 }),
        (0, r.jsx)(o.A, { "data-on": e2 })
      ]
    });
  }
  function K({
    segments: e2 = v,
    requests: t2 = N,
    model: a2 = T,
    ttl: i2 = 300,
    changeSegment: l2 = "system",
    autoPlay: c2 = true,
    loop: o2 = true,
    speed: p2 = 1,
    firstToken: m2 = $,
    onRequest: y2,
    onExpire: I2,
    messageLabel: O2 = "New message",
    title: V2 = "Prompt cache",
    className: Y2,
    style: Z2
  }) {
    let U2, J = (U2 = (0, s.useSyncExternalStore)(
      D,
      () => true,
      () => false
    ), !!(0, n.I)() && U2), Q = (0, s.useMemo)(() => t2.slice(0, 4), [t2]), X = Math.max(1, Q.length), ee = e2.length, et = null == l2 ? -1 : e2.findIndex((e3) => e3.id === l2), ea = et >= 0 ? e2[et] : null, er = e2.reduce((e3, t3) => e3 + t3.tokens, 0), es = (0, s.useMemo)(() => {
      let t3 = [
        ...e2.map((e3) => Math.sqrt(Math.max(1, e3.tokens))),
        Math.sqrt(Math.max(1, ...Q.map((e3) => e3.tokens)))
      ], a3 = t3.reduce((e3, t4) => e3 + t4, 0);
      return t3.map((e3) => Math.max(e3, 0.045 * a3));
    }, [e2, Q]), en = es.slice(0, ee).reduce((e3, t3) => e3 + t3, 0), ei = (0, s.useMemo)(() => {
      let e3 = 0;
      return es.slice(0, ee).map((t3) => {
        let a3 = e3 / en;
        return e3 += t3, a3;
      });
    }, [es, ee, en]), el = (t3) => e2[t3]?.color ?? w[t3 % w.length], ec = JSON.stringify([
      e2.map((e3) => [e3.id, e3.tokens]),
      Q.map((e3) => [e3.tokens, e3.gap ?? 0]),
      i2,
      a2.inputPrice,
      a2.cacheReadPrice,
      a2.cacheWritePrice
    ]), eo = F(i2), ed = P(a2.cacheWritePrice / a2.inputPrice), eh = P(a2.cacheReadPrice / a2.inputPrice), eu = `Every request repeats the same ${S(er)} token prefix. Only the new message at the end changes.`, ep = (0, s.useCallback)(
      (t3, a3) => {
        let r2 = t3.index + 1, s2 = e2[t3.breakAt];
        return "hit" === t3.kind ? "run" === a3 ? `Request ${r2} matches the cached prefix, so it reads it instead of processing it.` : `Cache hit. ${S(t3.cachedTokens)} tokens read at ${eh} the price. Only ${S(t3.processedTokens)} new tokens processed.` : "partial" === t3.kind ? "run" === a3 ? `The ${B(s2.label)} changed, so request ${r2} matches the cache only up to it.` : `Partial hit. ${S(t3.cachedTokens)} tokens came from the cache; ${S(t3.writtenTokens)} from the ${B(s2.label)} on were processed again.` : "run" === a3 ? t3.cold ? `Request ${r2} processes all ${S(t3.processedTokens)} tokens and writes the prefix to the cache.` : `The ${B(s2.label)} changed, so nothing matches and request ${r2} processes everything.` : `Cache write. The prefix stays cached for ${eo} and cost ${ed} the input price to store.`;
      },
      [e2, eh, ed, eo]
    ), em = (0, s.useRef)({
      segments: e2,
      list: Q,
      model: a2,
      ttl: i2,
      firstToken: m2,
      onRequest: y2,
      onExpire: I2,
      loop: o2,
      speed: p2,
      reduced: J,
      weights: es,
      changeIndex: et,
      count: X,
      captionFor: ep,
      introCaption: eu,
      ttlText: eo
    });
    (0, s.useLayoutEffect)(() => {
      em.current = {
        segments: e2,
        list: Q,
        model: a2,
        ttl: i2,
        firstToken: m2,
        onRequest: y2,
        onExpire: I2,
        loop: o2,
        speed: p2,
        reduced: J,
        weights: es,
        changeIndex: et,
        count: X,
        captionFor: ep,
        introCaption: eu,
        ttlText: eo
      };
    });
    let [ex, ef] = (0, s.useState)(() => ({
      round: 0,
      rows: Q.map(() => null),
      box: { filled: e2.map(() => false), mode: "empty", readKey: 0 },
      flight: null,
      caption: "",
      clearing: false
    })), [eg, e_] = (0, s.useState)(false), [ey, ek] = (0, s.useState)(false), [eb, ej] = (0, s.useState)(false), [ew, ev] = (0, s.useState)(true), [eN, eT] = (0, s.useState)(""), e$ = (0, s.useRef)(null), eM = (0, s.useRef)(null), eS = (0, s.useRef)(null), eA = (0, s.useRef)(null), eC = (0, s.useCallback)((e3) => {
      e3 ? eA.current = e3 : eA.current && !eA.current.isConnected && (eA.current = null);
    }, []), eR = (0, s.useRef)({
      stage: {
        name: "ready",
        slot: 0,
        t: 0,
        duration: 700,
        events: [],
        fired: 0
      },
      S: 0,
      roundAt: 0,
      cache: null,
      versions: [],
      armed: false,
      stepping: false,
      playing: false,
      ring: 0,
      flightKey: 0,
      round: 0,
      readKey: 0,
      results: []
    }), eq = (0, s.useCallback)((e3) => {
      eR.current.playing = e3, e_(e3);
    }, []), eP = (0, s.useCallback)((e3 = 0) => {
      let t3 = eR.current, { ttl: a3, reduced: r2 } = em.current, s2 = t3.cache ? Math.max(0, t3.cache.expiresAt - t3.S) : 0, n2 = a3 > 0 ? s2 / a3 : 0;
      n2 > t3.ring && e3 > 0 && !r2 ? t3.ring += (n2 - t3.ring) * (1 - Math.exp(-e3 / 70)) : t3.ring = n2;
      let i3 = eM.current;
      i3 && (i3.style.strokeDashoffset = String(1 - t3.ring), i3.style.opacity = t3.ring > 3e-3 ? "1" : "0"), eS.current && (eS.current.dataset.low = String(s2 > 0 && n2 < 0.2));
      let l3 = eA.current;
      if (l3) {
        let e4 = q(s2);
        l3.textContent !== e4 && (l3.textContent = e4);
      }
    }, []), eE = (0, s.useCallback)((e3) => ef((t3) => ({ ...t3, box: e3(t3.box) })), []), ez = (0, s.useCallback)(() => {
      let e3 = eR.current;
      e3.cache = null, ef((e4) => ({
        ...e4,
        box: {
          ...e4.box,
          filled: e4.box.filled.map(() => false),
          mode: "expired"
        },
        caption: "The cache expired. The next request writes the prefix again."
      })), em.current.onExpire?.(), e3.stepping && eT("The cache expired.");
    }, []), eF = (0, s.useCallback)((e3, t3) => {
      let a3 = e$.current, r2 = eR.current;
      if (!a3) return;
      let s2 = em.current.segments.length - 1, n2 = (e4) => {
        let r3 = a3.querySelector(e4(t3))?.getBoundingClientRect(), n3 = a3.querySelector(e4(s2))?.getBoundingClientRect();
        return r3 && n3 ? {
          left: r3.left,
          top: r3.top,
          width: n3.right - r3.left,
          height: r3.height
        } : null;
      }, i3 = n2((t4) => `[data-row="${e3}"] [data-seg="${t4}"]`), l3 = n2((e4) => `[data-box-seg="${e4}"]`);
      if (!i3 || !l3) return;
      let c3 = a3.getBoundingClientRect();
      r2.flightKey++;
      let o3 = {
        key: r2.flightKey,
        from: t3,
        left: i3.left - c3.left - a3.clientLeft,
        top: i3.top - c3.top - a3.clientTop,
        width: i3.width,
        height: i3.height,
        dx: l3.left - i3.left,
        dy: l3.top - i3.top,
        w1: l3.width,
        h1: l3.height
      };
      ef((e4) => ({ ...e4, flight: o3 }));
    }, []), eI = (0, s.useCallback)(
      (e3, t3 = 0) => {
        let a3 = eR.current, r2 = em.current, s2 = r2.reduced, n2 = { name: e3, slot: t3, t: 0, duration: 0, events: [], fired: 0 };
        if (a3.stage = n2, "ready" === e3) {
          n2.duration = 700 * !s2;
          return;
        }
        if ("gap" === e3) {
          let e4 = 0 === t3 ? 0 : Math.max(0, r2.list[t3]?.gap ?? 40), i3 = a3.S;
          n2.duration = e4 && !s2 ? 560 : 0, n2.tick = (t4) => {
            a3.S = i3 + e4 * (n2.duration ? 0.5 - Math.cos(
              Math.PI * ((e5, t5 = 0, a4 = 1) => Math.min(a4, Math.max(t5, e5)))(
                t4 / n2.duration
              )
            ) / 2 : 1), a3.cache && a3.S >= a3.cache.expiresAt && ez();
          };
          return;
        }
        if ("run" === e3) {
          0 === t3 && (a3.roundAt = a3.S);
          let e4 = a3.armed && r2.changeIndex >= 0;
          e4 && (a3.versions = a3.versions.map(
            (e5, t4) => t4 === r2.changeIndex ? e5 + 1 : e5
          ), a3.armed = false, ej(false));
          let i3 = !!a3.cache && a3.S < a3.cache.expiresAt, { result: l3, cache: c3 } = M({
            cache: a3.cache,
            versions: a3.versions,
            at: a3.S,
            roundAt: a3.roundAt,
            index: t3,
            request: r2.list[t3],
            segments: r2.segments,
            model: r2.model,
            ttl: r2.ttl,
            changed: e4,
            firstToken: r2.firstToken
          });
          a3.results[t3] = l3;
          let o3 = l3.breakAt, d2 = r2.segments.length, h2 = r2.weights.reduce((e5, t4) => e5 + t4, 0), u2 = (e5) => Math.max(120, 1100 * r2.weights[e5] / h2), p3 = r2.weights.map(() => ({ delay: 0, dur: 0 })), m3 = "hit" === l3.kind ? 280 : o3 > 0 ? 240 : 220 * !!i3;
          for (let e5 = o3; e5 < d2; e5++)
            p3[e5] = { delay: m3, dur: u2(e5) }, m3 += u2(e5);
          let x2 = m3;
          p3[d2] = { delay: m3, dur: u2(d2) };
          let f2 = m3 + u2(d2), g2 = {
            result: l3,
            state: s2 ? "done" : "run",
            timing: p3,
            showMark: e4 && i3 && "hit" !== l3.kind
          };
          if (ef((e5) => ({
            ...e5,
            rows: e5.rows.map((e6, a4) => a4 === t3 ? g2 : e6),
            caption: r2.captionFor(l3, "run")
          })), s2) {
            a3.cache = c3, eE((e5) => ({
              ...e5,
              filled: e5.filled.map(() => true),
              mode: "warm"
            }));
            return;
          }
          if ("hit" === l3.kind) {
            a3.readKey++;
            let e5 = a3.readKey;
            eE((t4) => ({ ...t4, mode: "reading", readKey: e5 })), n2.duration = Math.max(520, f2) + 60, n2.events.push({
              at: 200,
              run: () => {
                a3.cache = c3;
              }
            }), n2.events.push({
              at: n2.duration,
              run: () => eE((e6) => ({ ...e6, mode: "warm" }))
            });
            return;
          }
          i3 && n2.events.push({
            at: 140 * (o3 > 0),
            run: () => eE((e5) => ({
              ...e5,
              filled: e5.filled.map((e6, t4) => t4 < o3 && e6),
              mode: "writing"
            }))
          }), n2.events.push({
            at: x2,
            run: () => {
              i3 || eE((e5) => ({ ...e5, mode: "writing" })), eF(t3, o3);
            }
          }), n2.events.push({
            at: x2 + 460,
            run: () => {
              a3.cache = c3, ef((e5) => ({
                ...e5,
                flight: null,
                box: {
                  ...e5.box,
                  filled: e5.box.filled.map(() => true),
                  mode: "warm"
                }
              }));
            }
          }), n2.duration = Math.max(f2, x2 + 460) + 60;
          return;
        }
        if ("settle" === e3) {
          let e4 = a3.stepping;
          n2.duration = s2 ? 1400 * !e4 : e4 ? 460 : 900;
          let i3 = a3.results[t3];
          ef((e5) => ({
            ...e5,
            rows: e5.rows.map(
              (e6, a4) => a4 === t3 && e6 ? { ...e6, state: "done" } : e6
            ),
            caption: i3 ? r2.captionFor(i3, "done") : e5.caption
          })), i3 && (r2.onRequest?.(i3), e4 && eT(`${r2.captionFor(i3, "done")} Simulated.`));
          return;
        }
        if ("idle" === e3) {
          if (!a3.cache) {
            n2.duration = 0;
            return;
          }
          let e4 = s2 ? 1 / 0 : r2.ttl / 4200, t4 = false;
          n2.duration = 1 / 0, n2.tick = (s3, i3) => {
            t4 || (t4 = true, ef((e5) => ({
              ...e5,
              caption: `No new requests. The cache expires ${r2.ttlText} after its last use.`
            }))), a3.S = Number.isFinite(e4) ? a3.S + i3 * e4 : a3.cache?.expiresAt ?? a3.S, a3.cache && a3.S >= a3.cache.expiresAt && (ez(), n2.duration = 0);
          };
          return;
        }
        if ("expired" === e3) {
          n2.duration = 1700 * !!r2.loop;
          return;
        }
        if ("clear" === e3) {
          n2.duration = 280 * !s2, ef((e4) => ({ ...e4, clearing: true }));
          return;
        }
        "stopped" === e3 && (n2.duration = 1 / 0, eq(false));
      },
      [ez, eE, eF, eq]
    ), eL = (0, s.useCallback)(() => {
      let e3 = eR.current, { name: t3, slot: a3 } = e3.stage;
      if ("ready" === t3) return eI("gap", 0);
      if ("gap" === t3) return eI("run", a3);
      if ("run" === t3) return eI("settle", a3);
      if ("settle" === t3)
        return e3.stepping && (e3.stepping = false, ek(false)), a3 + 1 < em.current.count ? eI("gap", a3 + 1) : eI("idle");
      if ("idle" === t3) return eI("expired");
      if ("expired" === t3)
        return em.current.loop ? eI("clear") : eI("stopped");
      if ("clear" === t3) {
        e3.round++, e3.results = [];
        let t4 = e3.round;
        return ef((e4) => ({
          ...e4,
          round: t4,
          rows: e4.rows.map(() => null),
          clearing: false,
          box: "expired" === e4.box.mode ? { ...e4.box, mode: "empty" } : e4.box
        })), eI("gap", 0);
      }
    }, [eI]), eO = (0, s.useCallback)(
      (e3) => {
        let t3 = eR.current;
        if (!t3.playing && !t3.stepping) return;
        t3.stage.t += e3;
        let a3 = e3;
        for (let e4 = 0; e4 < 12; e4++) {
          let e5 = t3.stage;
          for (; e5.fired < e5.events.length && e5.t >= e5.events[e5.fired].at; )
            e5.events[e5.fired++].run();
          if (e5.tick?.(Math.min(e5.t, e5.duration), a3), e5.t < e5.duration)
            break;
          let r2 = e5.t - e5.duration, s2 = t3.stepping;
          if (eL(), s2 && !t3.stepping || t3.stage === e5) break;
          t3.stage.t = Number.isFinite(r2) ? r2 : 0, a3 = 0;
        }
        eP(e3);
      },
      [eL, eP]
    ), eB = (eg || ey) && ew;
    (0, s.useEffect)(() => {
      if (!eB) return;
      let e3 = 0, t3 = performance.now(), a3 = (r2) => {
        let s2 = Math.min(64, r2 - t3) * Math.max(0, em.current.speed);
        t3 = r2, eO(s2), e3 = requestAnimationFrame(a3);
      };
      return e3 = requestAnimationFrame(a3), () => cancelAnimationFrame(e3);
    }, [eB, eO]), (0, s.useEffect)(() => {
      let e3 = e$.current;
      if (!e3) return;
      let t3 = true, a3 = () => ev(t3 && "visible" === document.visibilityState), r2 = "u" < typeof IntersectionObserver ? null : new IntersectionObserver(
        ([e4]) => {
          t3 = !!e4?.isIntersecting, a3();
        },
        { rootMargin: "80px" }
      );
      return r2?.observe(e3), document.addEventListener("visibilitychange", a3), () => {
        r2?.disconnect(), document.removeEventListener("visibilitychange", a3);
      };
    }, []);
    let eD = (0, s.useCallback)(
      (e3) => {
        let t3 = eR.current, a3 = em.current;
        if (t3.S = 0, t3.roundAt = 0, t3.cache = null, t3.versions = a3.segments.map(() => 0), t3.armed = false, t3.stepping = false, t3.ring = 0, t3.round++, t3.results = [], ej(false), ek(false), e3) {
          let e4 = null, r2 = a3.list.map((r3, s3) => {
            s3 && (t3.S += Math.max(0, r3.gap ?? 40));
            let { result: n2, cache: i3 } = M({
              cache: e4,
              versions: t3.versions,
              at: t3.S,
              roundAt: 0,
              index: s3,
              request: r3,
              segments: a3.segments,
              model: a3.model,
              ttl: a3.ttl,
              changed: false,
              firstToken: a3.firstToken
            });
            return e4 = i3, t3.results[s3] = n2, {
              result: n2,
              state: "done",
              timing: a3.weights.map(() => ({ delay: 0, dur: 0 })),
              showMark: false
            };
          });
          t3.cache = e4, eI("idle");
          let s2 = r2[r2.length - 1]?.result;
          ef({
            round: t3.round,
            rows: r2,
            box: { filled: a3.segments.map(() => true), mode: "warm", readKey: 0 },
            flight: null,
            caption: s2 ? a3.captionFor(s2, "done") : a3.introCaption,
            clearing: false
          });
        } else
          eI("ready"), ef({
            round: t3.round,
            rows: a3.list.map(() => null),
            box: {
              filled: a3.segments.map(() => false),
              mode: "empty",
              readKey: 0
            },
            flight: null,
            caption: a3.introCaption,
            clearing: false
          });
        eP();
      },
      [eI, eP]
    );
    (0, s.useEffect)(() => {
      eD(J), eq(c2 && !J);
    }, [J, ec, c2, eD, eq]), (0, s.useLayoutEffect)(() => {
      eP();
    }, [ex.box.mode, eP]);
    let eW = ex.rows.filter((e3) => !!e3 && "done" === e3.state).map((e3) => e3.result), eH = eW.reduce((e3, t3) => e3 + t3.cost, 0), eG = eW.reduce((e3, t3) => e3 + t3.uncachedCost, 0), eK = eW.length && eG ? (1 - eH / eG) * 100 : null, eV = eW.filter((e3) => "hit" === e3.kind), eY = eV.length ? eV.reduce((e3, t3) => e3 + t3.firstToken, 0) / eV.length : null, eZ = eV.length ? eV.reduce((e3, t3) => e3 + t3.uncachedFirstToken, 0) / eV.length : null, eU = eY && eZ ? eZ / eY : null, eJ = null != eK && eK < 0, eQ = e2.reduce((e3, t3, a3) => e3 + (ex.box.filled[a3] ? t3.tokens : 0), 0), eX = (() => {
      switch (ex.box.mode) {
        case "writing":
          return {
            id: "writing",
            node: (0, r.jsx)(b.n, {
              className: L().shimmer,
              children: "Writing"
            })
          };
        case "reading":
          return {
            id: "reading",
            node: (0, r.jsx)(b.n, {
              className: L().shimmer,
              children: "Reading"
            })
          };
        case "warm":
          return {
            id: "warm",
            node: (0, r.jsxs)("span", {
              children: [
                "Expires in ",
                (0, r.jsx)("span", {
                  ref: eC,
                  className: L().tabular,
                  children: q(i2)
                })
              ]
            })
          };
        case "expired":
          return {
            id: "expired",
            node: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(x, {
                  className: L().statusIcon,
                  "data-tone": "warning",
                  "aria-hidden": "true"
                }),
                "Expired"
              ]
            })
          };
        default:
          return {
            id: "empty",
            node: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(f.A, {
                  className: L().statusIcon,
                  "aria-hidden": "true"
                }),
                "Empty"
              ]
            })
          };
      }
    })(), e0 = (e3, t3) => ({
      flexGrow: es[e3],
      "--c": e3 < ee ? el(e3) : "var(--pc-new)",
      ...t3
    });
    return (0, r.jsxs)("section", {
      ref: e$,
      className: [L().root, Y2].filter(Boolean).join(" "),
      style: { "--pc-rate": Math.max(0.1, p2), ...Z2 },
      "aria-label": `${V2}, simulated with sample prices`,
      "data-paused": !eB || p2 <= 0 || void 0,
      "data-clearing": ex.clearing || void 0,
      children: [
        (0, r.jsxs)("header", {
          className: L().header,
          children: [
            (0, r.jsxs)("div", {
              className: L().heading,
              children: [
                (0, r.jsx)("h3", { className: L().title, children: V2 }),
                (0, r.jsxs)("p", {
                  className: L().model,
                  children: [
                    (0, r.jsxs)("span", {
                      className: L().modelName,
                      children: [
                        a2.mark ? (0, r.jsx)("span", {
                          className: L().modelMark,
                          children: a2.mark
                        }) : null,
                        a2.name
                      ]
                    }),
                    (0, r.jsxs)("span", {
                      className: L().modelTtl,
                      children: [F(i2, true), " cache"]
                    })
                  ]
                })
              ]
            }),
            (0, r.jsxs)("div", {
              className: L().controls,
              children: [
                (0, r.jsx)(j.m, {
                  content: eg ? "Pause" : "Play",
                  children: (0, r.jsx)(k.$, {
                    variant: "secondary",
                    size: "sm",
                    className: L().iconButton,
                    "aria-label": eg ? "Pause" : "Play",
                    onClick: () => {
                      let e3 = eR.current;
                      if (eg) {
                        eq(false), eT("Paused.");
                        return;
                      }
                      "stopped" === e3.stage.name && eD(false), e3.stepping = false, ek(false), eq(true);
                    },
                    children: (0, r.jsx)(G, { playing: eg })
                  })
                }),
                (0, r.jsx)(j.m, {
                  content: "Send the next request",
                  children: (0, r.jsx)(k.$, {
                    variant: "secondary",
                    size: "sm",
                    className: L().iconButton,
                    "aria-label": "Send the next request",
                    onClick: () => {
                      let e3 = eR.current;
                      eq(false), "stopped" === e3.stage.name && eD(false), e3.stepping = true, ek(true);
                      let { name: t3, slot: a3 } = e3.stage;
                      "ready" === t3 ? eI("gap", 0) : "idle" === t3 || "expired" === t3 ? eI("clear") : "settle" === t3 && eI(a3 + 1 < X ? "gap" : "clear", a3 + 1);
                    },
                    children: (0, r.jsx)(g.A, { "aria-hidden": "true" })
                  })
                }),
                (0, r.jsx)(j.m, {
                  content: "Reset",
                  children: (0, r.jsx)(k.$, {
                    variant: "secondary",
                    size: "sm",
                    className: L().iconButton,
                    "aria-label": "Reset",
                    onClick: () => {
                      eD(false), eT("Reset. The cache is empty.");
                    },
                    children: (0, r.jsx)(_.A, { "aria-hidden": "true" })
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("ul", {
          className: L().legend,
          "aria-label": "Prompt segments",
          children: [
            e2.map(
              (e3, t3) => (0, r.jsxs)(
                "li",
                {
                  className: L().legendItem,
                  children: [
                    (0, r.jsx)("span", {
                      className: L().swatch,
                      style: { "--c": el(t3) },
                      "aria-hidden": "true"
                    }),
                    (0, r.jsx)("span", { children: e3.label }),
                    (0, r.jsx)("span", {
                      className: L().legendTokens,
                      children: S(e3.tokens)
                    })
                  ]
                },
                e3.id
              )
            ),
            (0, r.jsxs)("li", {
              className: L().legendItem,
              children: [
                (0, r.jsx)("span", {
                  className: L().swatch,
                  style: { "--c": "var(--pc-new)" },
                  "aria-hidden": "true"
                }),
                (0, r.jsx)("span", { children: O2 })
              ]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: L().main,
          children: [
            (0, r.jsxs)("div", {
              className: L().stack,
              children: [
                (0, r.jsxs)("div", {
                  className: L().columns,
                  "aria-hidden": "true",
                  children: [
                    (0, r.jsxs)("span", {
                      className: L().keys,
                      children: [
                        (0, r.jsxs)("span", {
                          className: L().legendItem,
                          children: [
                            (0, r.jsx)("span", { className: L().keySolid }),
                            "Processed"
                          ]
                        }),
                        (0, r.jsxs)("span", {
                          className: L().legendItem,
                          children: [
                            (0, r.jsx)("span", { className: L().keyCached }),
                            "From cache"
                          ]
                        })
                      ]
                    }),
                    (0, r.jsx)("span", {
                      className: L().metricHead,
                      children: "Processed"
                    }),
                    (0, r.jsx)("span", {
                      className: L().metricHead,
                      children: "Input cost"
                    }),
                    (0, r.jsx)("span", {
                      className: L().metricHead,
                      children: "First token"
                    })
                  ]
                }),
                (0, r.jsx)("ol", {
                  className: L().rows,
                  "aria-label": "Requests",
                  children: ex.rows.map((t3, a3) => {
                    let s2 = ((e3) => {
                      if (!e3) return { id: "queued", node: null };
                      let { result: t4, state: a4 } = e3;
                      if ("run" === a4) {
                        let e4 = "hit" === t4.kind ? "Reading cache" : "Processing";
                        return {
                          id: `run-${e4}`,
                          node: (0, r.jsx)(b.n, {
                            className: L().shimmer,
                            children: e4
                          })
                        };
                      }
                      return "hit" === t4.kind ? {
                        id: "hit",
                        node: (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(d.A, {
                              className: L().statusIcon,
                              "data-tone": "success",
                              "aria-hidden": "true"
                            }),
                            "Cache hit"
                          ]
                        })
                      } : "partial" === t4.kind ? {
                        id: "partial",
                        node: (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(h.A, {
                              className: L().statusIcon,
                              "data-tone": "warning",
                              "aria-hidden": "true"
                            }),
                            "Partial hit"
                          ]
                        })
                      } : {
                        id: "write",
                        node: (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(u.A, {
                              className: L().statusIcon,
                              "data-tone": "info",
                              "aria-hidden": "true"
                            }),
                            "Cache write"
                          ]
                        })
                      };
                    })(t3), n2 = a3 > 0 ? ex.rows[a3 - 1] : null, i3 = n2 && "done" === n2.state ? n2.result : null, l3 = t3 && "done" === t3.state ? t3.result : null, c3 = t3?.result.breakAt ?? 0;
                    return (0, r.jsxs)(
                      "li",
                      {
                        className: L().row,
                        "data-row": a3,
                        "data-state": t3 ? t3.state : "queued",
                        "data-kind": t3?.result.kind,
                        children: [
                          (0, r.jsx)("span", {
                            className: L().srOnly,
                            children: ((t4, a4) => {
                              if (!t4 || "done" !== t4.state)
                                return `Request ${a4 + 1}: not sent yet.`;
                              let r2 = t4.result, s3 = "hit" === r2.kind ? "cache hit" : "partial" === r2.kind ? `partial hit, changed at the ${B(e2[r2.breakAt].label)}` : "cache write";
                              return `Request ${a4 + 1} at ${q(r2.at)}${r2.message ? `, "${r2.message}"` : ""}: ${s3}. ${S(r2.cachedTokens)} tokens read from the cache, ${S(r2.processedTokens)} processed. Input cost ${A(r2.cost)}, first token in ${R(r2.firstToken)}.`;
                            })(t3, a3)
                          }),
                          (0, r.jsxs)("div", {
                            className: L().rowHead,
                            "aria-hidden": "true",
                            children: [
                              (0, r.jsxs)("span", {
                                className: L().rowTitle,
                                children: ["Request ", a3 + 1]
                              }),
                              (0, r.jsx)("span", {
                                className: L().rowTime,
                                children: t3 ? q(t3.result.at) : ""
                              }),
                              (0, r.jsx)(W, {
                                id: `${ex.round}-${s2.id}`,
                                reduced: J,
                                className: L().rowStatus,
                                children: s2.node
                              })
                            ]
                          }),
                          (0, r.jsxs)("div", {
                            className: L().bar,
                            "aria-hidden": "true",
                            children: [
                              (0, r.jsx)("div", {
                                className: L().prefix,
                                style: { flexGrow: en },
                                children: e2.map((e3, a4) => {
                                  let s3 = t3 ? a4 < c3 ? "cached" : "process" : "empty", n3 = t3?.timing[a4];
                                  return (0, r.jsxs)(
                                    "span",
                                    {
                                      className: L().seg,
                                      "data-seg": a4,
                                      "data-mode": s3,
                                      style: e0(a4, {
                                        "--d": `${n3?.delay ?? 0}ms`,
                                        "--t": `${n3?.dur ?? 0}ms`,
                                        "--l": ei[a4]
                                      }),
                                      children: [
                                        (0, r.jsxs)("span", {
                                          className: L().clip,
                                          children: [
                                            (0, r.jsx)("span", {
                                              className: L().fill
                                            }),
                                            t3?.state !== "run" || "cached" !== s3 || J ? null : (0, r.jsx)("span", {
                                              className: L().band
                                            })
                                          ]
                                        }),
                                        t3?.showMark && a4 === c3 ? (0, r.jsx)("span", {
                                          className: L().mark,
                                          style: { "--m": "140ms" }
                                        }) : null
                                      ]
                                    },
                                    e3.id
                                  );
                                })
                              }),
                              (0, r.jsx)("span", {
                                className: L().seg,
                                "data-mode": t3 ? "process" : "empty",
                                style: e0(ee, {
                                  "--d": `${t3?.timing[ee]?.delay ?? 0}ms`,
                                  "--t": `${t3?.timing[ee]?.dur ?? 0}ms`
                                }),
                                children: (0, r.jsx)("span", {
                                  className: L().clip,
                                  children: (0, r.jsx)("span", {
                                    className: L().fill
                                  })
                                })
                              })
                            ]
                          }),
                          (0, r.jsx)("span", {
                            className: L().metric,
                            "aria-hidden": "true",
                            children: (0, r.jsx)(H, {
                              value: l3?.processedTokens ?? null,
                              from: i3?.processedTokens,
                              format: S,
                              reduced: J,
                              className: L().metricValue
                            })
                          }),
                          (0, r.jsx)("span", {
                            className: L().metric,
                            "aria-hidden": "true",
                            children: (0, r.jsx)(H, {
                              value: l3?.cost ?? null,
                              from: i3?.cost,
                              format: A,
                              reduced: J,
                              className: L().metricValue
                            })
                          }),
                          (0, r.jsx)("span", {
                            className: L().metric,
                            "aria-hidden": "true",
                            children: (0, r.jsx)(H, {
                              value: l3?.firstToken ?? null,
                              from: i3?.firstToken,
                              format: R,
                              reduced: J,
                              className: L().metricValue
                            })
                          })
                        ]
                      },
                      a3
                    );
                  })
                })
              ]
            }),
            (0, r.jsxs)("div", {
              className: L().box,
              "data-mode": ex.box.mode,
              role: "group",
              "aria-label": "Cache",
              children: [
                (0, r.jsxs)("div", {
                  className: L().boxHead,
                  children: [
                    (0, r.jsx)("span", {
                      ref: eS,
                      className: L().ring,
                      "aria-hidden": "true",
                      children: (0, r.jsxs)("svg", {
                        viewBox: "0 0 36 36",
                        children: [
                          (0, r.jsx)("circle", {
                            className: L().ringTrack,
                            cx: "18",
                            cy: "18",
                            r: "15"
                          }),
                          (0, r.jsx)("circle", {
                            ref: eM,
                            className: L().ringArc,
                            cx: "18",
                            cy: "18",
                            r: "15",
                            pathLength: 1,
                            strokeDasharray: "1 1",
                            strokeDashoffset: 1
                          })
                        ]
                      })
                    }),
                    (0, r.jsxs)("span", {
                      className: L().boxTitle,
                      children: [
                        (0, r.jsx)("span", {
                          className: L().boxName,
                          children: "Cache"
                        }),
                        (0, r.jsx)(W, {
                          id: eX.id,
                          reduced: J,
                          className: L().boxStatus,
                          children: eX.node
                        })
                      ]
                    })
                  ]
                }),
                (0, r.jsx)("div", {
                  className: L().boxBar,
                  "aria-hidden": "true",
                  children: e2.map(
                    (e3, t3) => (0, r.jsx)(
                      "span",
                      {
                        className: L().boxSeg,
                        "data-box-seg": t3,
                        "data-on": ex.box.filled[t3] ?? false,
                        style: {
                          flexGrow: es[t3],
                          "--c": el(t3),
                          "--l": ei[t3],
                          "--i": ee - 1 - t3
                        },
                        children: (0, r.jsxs)("span", {
                          className: L().clip,
                          children: [
                            (0, r.jsx)("span", { className: L().boxFill }),
                            "reading" === ex.box.mode && ex.box.filled[t3] && !J ? (0, r.jsx)(
                              "span",
                              { className: L().band },
                              ex.box.readKey
                            ) : null
                          ]
                        })
                      },
                      e3.id
                    )
                  )
                }),
                (0, r.jsxs)("span", {
                  className: L().boxTokens,
                  children: [
                    (0, r.jsx)(H, {
                      value: eQ,
                      format: S,
                      reduced: J,
                      className: L().tabular
                    }),
                    " tokens cached"
                  ]
                }),
                (0, r.jsxs)("div", {
                  className: L().pricing,
                  children: [
                    (0, r.jsxs)("dl", {
                      className: L().prices,
                      children: [
                        (0, r.jsxs)("div", {
                          className: L().price,
                          children: [
                            (0, r.jsx)("dt", { children: "Input" }),
                            (0, r.jsx)("dd", { children: C(a2.inputPrice) })
                          ]
                        }),
                        (0, r.jsxs)("div", {
                          className: L().price,
                          children: [
                            (0, r.jsx)("dt", { children: "Cache write" }),
                            (0, r.jsx)("dd", {
                              children: C(a2.cacheWritePrice)
                            })
                          ]
                        }),
                        (0, r.jsxs)("div", {
                          className: L().price,
                          children: [
                            (0, r.jsx)("dt", { children: "Cache read" }),
                            (0, r.jsx)("dd", { children: C(a2.cacheReadPrice) })
                          ]
                        })
                      ]
                    }),
                    (0, r.jsx)("p", {
                      className: L().priceNote,
                      children: "Per million tokens"
                    })
                  ]
                })
              ]
            }),
            ex.flight ? (0, r.jsx)(
              "span",
              {
                className: L().ghost,
                "aria-hidden": "true",
                style: {
                  left: ex.flight.left,
                  top: ex.flight.top,
                  width: ex.flight.width,
                  height: ex.flight.height,
                  "--dx": `${ex.flight.dx}px`,
                  "--dy": `${ex.flight.dy}px`,
                  "--w1": `${ex.flight.w1}px`,
                  "--h1": `${ex.flight.h1}px`,
                  "--fly": "460ms"
                },
                children: e2.slice(ex.flight.from).map((e3, t3) => {
                  let a3 = (ex.flight?.from ?? 0) + t3;
                  return (0, r.jsx)(
                    "span",
                    {
                      className: L().ghostSeg,
                      style: { flexGrow: es[a3], "--c": el(a3) },
                      children: (0, r.jsx)("span", {
                        className: L().ghostSolid
                      })
                    },
                    e3.id
                  );
                })
              },
              ex.flight.key
            ) : null
          ]
        }),
        (0, r.jsx)(W, {
          id: ex.caption || eu,
          reduced: J,
          className: L().caption,
          children: ex.caption || eu
        }),
        (0, r.jsxs)("footer", {
          className: L().footer,
          children: [
            (0, r.jsxs)("div", {
              className: L().stats,
              children: [
                (0, r.jsxs)("div", {
                  className: L().stat,
                  children: [
                    (0, r.jsx)(H, {
                      value: null == eK ? null : Math.abs(eK),
                      format: E,
                      reduced: J,
                      className: L().statValue
                    }),
                    (0, r.jsx)(W, {
                      id: eJ ? "higher" : "lower",
                      reduced: J,
                      className: L().statLabel,
                      children: eJ ? "higher input cost" : "lower input cost"
                    }),
                    (0, r.jsx)("span", {
                      className: L().statDetail,
                      children: null != eK ? `${A(eH)} vs ${A(eG)} uncached` : "No requests yet"
                    })
                  ]
                }),
                (0, r.jsxs)("div", {
                  className: L().stat,
                  children: [
                    (0, r.jsx)(H, {
                      value: eU,
                      format: z,
                      reduced: J,
                      className: L().statValue
                    }),
                    (0, r.jsx)("span", {
                      className: L().statLabel,
                      children: "faster first token"
                    }),
                    (0, r.jsx)("span", {
                      className: L().statDetail,
                      children: eY && eZ ? `${R(eY)} vs ${R(eZ)} on cache hits` : "No cache hits yet"
                    })
                  ]
                })
              ]
            }),
            ea ? (0, r.jsxs)(k.$, {
              variant: "secondary",
              size: "sm",
              className: L().change,
              "aria-pressed": eb,
              onClick: () => {
                let e3 = eR.current;
                if (e3.armed = !e3.armed, ej(e3.armed), !ea) return;
                let t3 = !!e3.cache && e3.S < e3.cache.expiresAt, a3 = e3.armed ? t3 ? `Edited the ${B(ea.label)}. The next request matches the cache only up to it.` : `Edited the ${B(ea.label)}. The cache is empty, so the next request processes everything anyway.` : `Kept the ${B(ea.label)} as it was.`;
                ef((e4) => ({ ...e4, caption: a3 })), eT(a3), e3.armed && t3 && eg && "idle" === e3.stage.name && eI("clear");
              },
              children: [
                (0, r.jsx)(u.A, { "aria-hidden": "true" }),
                `Change the ${B(ea.label)}`
              ]
            }) : null
          ]
        }),
        (0, r.jsx)("p", {
          className: L().srOnly,
          "aria-live": "polite",
          children: eN
        })
      ]
    });
  }
  var V = a(15573), Y = a.n(V);
  function Z() {
    return (0, r.jsx)("div", {
      className: Y().demo,
      children: (0, r.jsx)(K, {})
    });
  }
  let U = Z;
}

__m(__module,__exports,__require);
}