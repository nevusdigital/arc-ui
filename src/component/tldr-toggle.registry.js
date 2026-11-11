/* tldr-toggle (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(7191, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { TldrToggleDemo: () => er, default: () => ei });
  var r = a(95155), i = a(12115), n = a(50680), s = a(92171), o = a(18310), l = a(80642), d = a(25354), c = a(23723), u = a(64962), h = a(35484), p = a(36483), m = a(64577), g = a(74336), f = a(40852), y = a(92298), x = a(92218), _ = a(51288), w = a(73474), b = a(66558), v = a(94274), j = a(52898), k = a(36690), N = a(7770), S = a(67752);
  let T = [35, 60, 85, 100, 130], C = {
    title: "How we made sync 4x faster for the largest workspaces",
    source: {
      name: "Linear blog",
      mark: (0, r.jsx)(
        function({ title: e2 = "Linear", ...t2 }) {
          return (0, r.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            role: "img",
            "aria-label": e2,
            ...t2,
            children: (0, r.jsx)("path", {
              d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
            })
          });
        },
        { "aria-hidden": "true" }
      )
    },
    author: { name: "Olivia Bennett", avatar: (0, S.my)("olivia-bennett") },
    date: "Oct 21, 2026",
    paragraphs: [
      {
        id: "cold-start",
        text: "Last spring our largest customers started to feel it. Workspaces with more than 400,000 issues took up to 11 seconds to become interactive on a cold start, and every reconnect after a laptop woke from sleep replayed thousands of changes the client already had. Sync was designed for teams of fifty. It was now serving companies of five thousand."
      },
      {
        id: "root-cause",
        text: "The root cause was the bootstrap payload. On first load, the client downloaded a full snapshot of every issue, comment and project it could see, then applied changes on top. For a workspace with 400,000 issues that snapshot was 180 MB of JSON, and parsing it blocked the main thread long before anything appeared on screen."
      },
      {
        id: "partial-bootstrap",
        text: "We replaced the snapshot with partial bootstrapping. The client now loads only the teams, views and issues the first screen needs, about 2 percent of a typical large workspace, and streams the rest in the background over the same connection. Anything else is fetched the first time a view asks for it, then kept in IndexedDB for the next visit."
      },
      {
        id: "reconnects",
        text: "Reconnects now carry a sequence number per model instead of one global cursor. A client coming back online sends the last number it saw for each model, and the server returns only what changed since. A laptop that slept through the weekend catches up in about 300 milliseconds instead of replaying 40,000 changes."
      },
      {
        id: "results",
        text: "The results held across every cohort we measured. Median time to interactive for the largest workspaces fell from 11.2 to 2.6 seconds, memory on first load dropped by 58 percent, and sync-related support tickets fell by two thirds in the month after the rollout finished on October 6."
      },
      {
        id: "next",
        text: "Partial bootstrapping is now on for every workspace, with no setting to change. Next we are moving search indexing into a web worker, so typing in the command menu never waits on the network, and in November we are publishing the sync protocol docs for integration partners."
      }
    ]
  }, A = {
    name: "Claude Haiku 5.5",
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
      { "aria-hidden": "true", style: { color: "#D97757" } }
    )
  }, $ = [
    {
      priority: 1,
      text: "Linear made sync about 4x faster for its largest workspaces by replacing the full bootstrap snapshot with partial bootstrapping."
    },
    {
      priority: 5,
      text: "The old 180 MB snapshot blocked the main thread for up to 11 seconds in workspaces with 400,000 issues."
    },
    {
      priority: 3,
      text: "The client now loads only what the first screen needs, about 2 percent of the workspace, and streams the rest in the background."
    },
    {
      priority: 4,
      text: "Reconnects use a sequence number per model, so a laptop that slept all weekend catches up in about 300 ms instead of replaying 40,000 changes."
    },
    {
      priority: 2,
      text: "Median time to interactive fell from 11.2 to 2.6 seconds, and first-load memory dropped 58 percent."
    },
    {
      priority: 6,
      text: "Sync-related support tickets fell by two thirds after the rollout finished on October 6."
    },
    {
      priority: 7,
      text: "Next up: search indexing in a web worker, and public sync protocol docs for partners in November."
    }
  ], R = [2, 3, 4, 5, 7], E = [
    {
      priority: 6,
      source: "cold-start",
      text: "Workspaces with over 400,000 issues took up to 11 seconds to become interactive on a cold start."
    },
    {
      priority: 4,
      source: "root-cause",
      text: "The old 180 MB JSON snapshot blocked the main thread before anything rendered."
    },
    {
      priority: 1,
      source: "partial-bootstrap",
      text: "Partial bootstrapping loads about 2 percent of a workspace up front and streams the rest in the background."
    },
    {
      priority: 3,
      source: "reconnects",
      text: "A sequence number per model lets a client that slept all weekend catch up in about 300 ms."
    },
    {
      priority: 2,
      source: "results",
      text: "Median time to interactive fell from 11.2 to 2.6 seconds for the largest workspaces."
    },
    {
      priority: 5,
      source: "results",
      text: "First-load memory dropped 58 percent and sync support tickets fell by two thirds."
    },
    {
      priority: 7,
      source: "next",
      text: "Search indexing moves to a web worker next, and the sync protocol docs open to partners in November."
    }
  ], z = (e2) => e2.match(/^.+?[.!?](?=\s|$)/)?.[0] ?? e2, L = (e2) => e2.split(/\s+/).filter(Boolean).length, M = () => new DOMException("The summary was stopped.", "AbortError");
  function O(e2, t2) {
    return new Promise((a2, r2) => {
      if (t2.aborted) return r2(M());
      let i2 = () => {
        window.clearTimeout(n2), r2(M());
      }, n2 = window.setTimeout(() => {
        t2.removeEventListener("abort", i2), a2();
      }, e2);
      t2.addEventListener("abort", i2, { once: true });
    });
  }
  let P = [4, 6, 3, 7, 5, 8, 4, 5, 6, 3];
  function I(e2) {
    let t2 = e2.match(/\S+\s*/g) ?? [], a2 = [];
    for (let e3 = 0, r2 = 0; e3 < t2.length; r2++) {
      let i2 = P[r2 % P.length];
      a2.push(t2.slice(e3, e3 + i2).join("")), e3 += i2;
    }
    return a2;
  }
  async function* B(e2, t2) {
    let a2 = (e3) => O(30 + 7 * e3 % 11, t2), r2 = 0;
    if ("string" == typeof e2) {
      for (let t3 of I(e2)) yield { type: "text", text: t3 }, await a2(r2++);
      return;
    }
    for (let t3 of e2)
      for (let e3 of (yield { type: "point", source: t3.source }, I(t3.text)))
        yield { type: "text", text: e3 }, await a2(r2++);
  }
  async function* D(e2, t2 = {}) {
    if (await O(t2.thinkMs ?? 700, e2.signal), t2.fail)
      throw Error("The model did not respond in time.");
    yield* B(
      (function({ mode: e3, length: t3, article: a2 }) {
        let r2 = a2.title === C.title;
        if ("points" === e3) {
          let e4 = t3 + 2;
          if (r2) {
            let t4 = new Set(
              E.map((e5) => e5.priority).sort((e5, t5) => e5 - t5).slice(0, e4)
            );
            return E.filter((e5) => t4.has(e5.priority)).map(
              ({ source: e5, text: t5 }) => ({ source: e5, text: t5 })
            );
          }
          return a2.paragraphs.slice(0, e4).map((e5) => ({ source: e5.id, text: z(e5.text) }));
        }
        if (r2) {
          let e4 = R[t3 - 1] ?? 3, a3 = $.filter((t4) => t4.priority <= e4).map((e5) => e5.text);
          if (e4 < 5) return a3.join(" ");
          let r3 = a3.findIndex((e5) => e5.startsWith("Median"));
          return `${a3.slice(0, r3).join(" ")}

${a3.slice(r3).join(" ")}`;
        }
        let i2 = T[t3 - 1] ?? 60, n2 = [];
        for (let e4 of a2.paragraphs) {
          if (n2.length && L(n2.join(" ")) >= i2) break;
          n2.push(z(e4.text));
        }
        return n2.join(" ");
      })(e2),
      e2.signal
    );
  }
  var W = a(44474), F = a.n(W);
  let Y = (...e2) => e2.filter(Boolean).join(" "), H = (e2, t2) => `${e2} ${t2}${1 === e2 ? "" : "s"}`, J = (e2) => e2.split(/\s+/).filter(Boolean).length, q = [
    { value: "full", label: "Full" },
    { value: "summary", label: "Summary" },
    { value: "points", label: "Key points" }
  ], K = [1, 2, 3, 4, 5], V = [...N.T.ease.standard], Z = { type: "spring", visualDuration: 0.26, bounce: 0 }, G = { duration: 0.16, ease: V }, X = { duration: 0.1, ease: V };
  function U(e2) {
    return "points" === e2.mode ? e2.points.map((e3) => e3.chunks.join("").trim()).filter(Boolean).join("\n") : e2.paras.map((e3) => e3.join("").trim()).filter(Boolean).join("\n\n");
  }
  function Q({ article: e2, focus: t2, reduced: a2 }) {
    let n2 = (0, i.useRef)(/* @__PURE__ */ new Map()), [s2, o2] = (0, i.useState)(null);
    return (0, i.useEffect)(() => {
      if (!t2) return;
      let e3 = 0, r2 = window.setTimeout(() => {
        let r3 = n2.current.get(t2.id);
        r3 && (r3.scrollIntoView({
          block: "center",
          behavior: a2 ? "auto" : "smooth"
        }), r3.focus({ preventScroll: true }), o2(t2.id), e3 = window.setTimeout(() => o2(null), 1800));
      }, 280 * !a2);
      return () => {
        window.clearTimeout(r2), window.clearTimeout(e3);
      };
    }, [t2, a2]), (0, r.jsx)("div", {
      className: F().article,
      children: e2.paragraphs.map(
        (e3) => (0, r.jsx)(
          "p",
          {
            ref: (t3) => {
              t3 ? n2.current.set(e3.id, t3) : n2.current.delete(e3.id);
            },
            className: F().para,
            "data-lit": s2 === e3.id || void 0,
            tabIndex: -1,
            children: e3.text
          },
          e3.id
        )
      )
    });
  }
  function ee({
    article: e2 = C,
    summarize: t2,
    model: a2 = A,
    mode: n2,
    defaultMode: N2 = "full",
    onModeChange: S2,
    length: $2,
    defaultLength: R2 = 2,
    onLengthChange: E2,
    onComplete: z2,
    onJump: L2,
    autoPlay: M2,
    simulated: O2,
    className: P2
  }) {
    let I2, W2, V2 = !!(0, o.I)(), [et2, ea2] = (0, i.useState)(N2), [er2, ei2] = (0, i.useState)(R2), en = n2 ?? et2, es = $2 ?? er2, [eo, el] = (0, i.useState)(es), [ed, ec] = (0, i.useState)(es);
    ed !== es && (ec(es), el(es));
    let [eu, eh] = (0, i.useState)("points" === en ? "points" : "summary");
    "full" !== en && en !== eu && eh(en);
    let [ep, em] = (0, i.useState)(null), [eg, ef] = (0, i.useState)(0), [ey, ex] = (0, i.useState)(null), [e_, ew] = (0, i.useState)(""), eb = (0, i.useRef)(/* @__PURE__ */ new Map()), ev = (0, i.useRef)(null), ej = (0, i.useRef)(false), ek = (0, i.useRef)(0), eN = (0, i.useRef)(false), eS = (0, i.useRef)(null), { outer: eT, inner: eC } = (I2 = (0, i.useRef)(null), W2 = (0, i.useRef)(null), (0, i.useEffect)(() => {
      let e3, t3 = I2.current, a3 = W2.current;
      if (!t3 || !a3 || "u" < typeof ResizeObserver) return;
      let r2 = a3.offsetHeight, i2 = a3.offsetWidth, n3 = () => {
        t3.style.height = "", e3 = void 0;
      }, o2 = new ResizeObserver(() => {
        let o3 = a3.offsetHeight, l2 = a3.offsetWidth, d2 = l2 !== i2;
        if (i2 = l2, o3 === r2) return;
        let c2 = e3 ? t3.getBoundingClientRect().height : r2;
        if (r2 = o3, e3?.stop(), V2 || d2) return void n3();
        t3.style.height = `${c2}px`;
        let u2 = (0, s.i)(t3, { height: o3 }, Z);
        e3 = u2, u2.then(() => {
          e3 === u2 && n3();
        });
      });
      return o2.observe(a3), () => {
        o2.disconnect(), e3?.stop();
      };
    }, [V2]), { outer: I2, inner: W2 }), eA = 0 === e2.paragraphs.length, e$ = O2 ?? !t2, eR = e$ ? " Simulated, nothing was sent." : "", eE = (0, i.useRef)({
      summarize: t2,
      article: e2,
      model: a2,
      onComplete: z2,
      onModeChange: S2,
      simNote: eR
    });
    (0, i.useLayoutEffect)(() => {
      eE.current = {
        summarize: t2,
        article: e2,
        model: a2,
        onComplete: z2,
        onModeChange: S2,
        simNote: eR
      };
    });
    let ez = `${e2.title}
${e2.paragraphs.map((e3) => e3.id).join(",")}`, eL = (0, i.useRef)(ez);
    function eM(e3) {
      e3 !== en && (void 0 === n2 && ea2(e3), eE.current.onModeChange?.(e3));
    }
    (0, i.useEffect)(() => {
      if (eL.current !== ez && (eL.current = ez, eb.current.clear()), "full" === en || eA)
        return;
      let e3 = `${en}:${es}`, t3 = eb.current.get(e3);
      if (t3 && !ej.current) {
        em({ ...t3, instant: true }), ew(
          `Showing the saved ${"points" === en ? "key points" : "summary"}.`
        );
        return;
      }
      ej.current = false;
      let a3 = new AbortController();
      ev.current = a3;
      let { summarize: r2, article: i2, model: n3 } = eE.current, s2 = {
        id: ++ek.current,
        key: e3,
        mode: en,
        length: es,
        status: "thinking",
        paras: [[]],
        points: []
      };
      return em(s2), ew(
        `${"points" === en ? "Finding key points" : "Summarizing"} with ${n3.name}.`
      ), (async () => {
        try {
          let t4 = {
            mode: en,
            length: es,
            targetWords: T[es - 1],
            pointCount: es + 2,
            article: i2,
            signal: a3.signal
          }, n4 = r2 ? r2(t4) : D(t4);
          for await (let e4 of "object" == typeof n4 && null !== n4 && Symbol.asyncIterator in n4 ? n4 : B(await n4, a3.signal)) {
            if (a3.signal.aborted) return;
            s2 = (function(e5, t5) {
              if ("point" === t5.type)
                return {
                  ...e5,
                  status: "streaming",
                  points: [...e5.points, { source: t5.source, chunks: [] }]
                };
              if ("points" === e5.mode) {
                let a5 = e5.points.length ? e5.points.slice() : [{ source: "", chunks: [] }], r3 = a5[a5.length - 1];
                return a5[a5.length - 1] = { ...r3, chunks: [...r3.chunks, t5.text] }, { ...e5, status: "streaming", points: a5 };
              }
              let a4 = e5.paras.slice();
              return t5.text.split(/\n{2,}/).forEach((e6, t6) => {
                if (t6 > 0 && a4.push([]), e6) {
                  let t7 = a4.length - 1;
                  a4[t7] = [...a4[t7], e6];
                }
              }), { ...e5, status: "streaming", paras: a4 };
            })(s2, e4), em(s2);
          }
          if (a3.signal.aborted) return;
          s2 = { ...s2, status: "done" }, eb.current.set(e3, s2), em(s2);
          let o2 = U(s2), l2 = "points" === en ? s2.points.map((e4) => ({
            source: e4.source,
            text: e4.chunks.join("").trim()
          })) : void 0;
          ew(
            `${"points" === en ? `${H(l2?.length ?? 0, "key point")} ready.` : `Summary ready, ${H(J(o2), "word")}.`}${eE.current.simNote}`
          ), eE.current.onComplete?.({
            mode: en,
            length: es,
            text: o2,
            points: l2,
            words: J(o2)
          });
        } catch (t4) {
          if (a3.signal.aborted) return;
          let e4 = t4 instanceof Error && t4.message ? t4.message : "Something went wrong.";
          em(s2 = { ...s2, status: "error", error: e4 }), ew(`Couldn\u2019t summarize. ${e4}${eE.current.simNote}`);
        }
      })(), () => a3.abort();
    }, [en, es, eg, eA, ez]);
    let eO = !!ep && ep.key === `${en}:${es}` && ("thinking" === ep.status || "streaming" === ep.status);
    function eP() {
      eO && (ev.current?.abort(), em(
        (e3) => e3 && ("thinking" === e3.status || "streaming" === e3.status) ? { ...e3, status: "stopped" } : e3
      ), ew("Stopped. What arrived is kept."));
    }
    function eI() {
      ej.current = true, ef((e3) => e3 + 1);
    }
    let eB = M2 ?? !t2;
    (0, i.useEffect)(() => {
      let e3 = eS.current;
      if (!eB || !e3 || "u" < typeof IntersectionObserver) return;
      let t3 = 0, a3 = new IntersectionObserver(
        ([e4]) => {
          window.clearTimeout(t3), e4?.isIntersecting && !eN.current && (t3 = window.setTimeout(() => {
            eN.current || (eN.current = true, a3.disconnect(), ea2((e5) => void 0 === n2 && "full" === e5 ? "summary" : e5), eE.current.onModeChange?.("summary"));
          }, 1e3));
        },
        { threshold: 0.5 }
      );
      return a3.observe(e3), () => {
        a3.disconnect(), window.clearTimeout(t3);
      };
    }, [eB, n2]);
    let eD = ep && ep.key === `${en}:${es}` ? ep : null, eW = eD?.status ?? "thinking", eF = eD ? U(eD) : "", eY = J(eF), eH = "full" === en ? eu : en, eJ = e2.paragraphs.reduce((e3, t3) => e3 + J(t3.text), 0), eq = e2.readingTime ?? `${Math.max(1, Math.ceil(eJ / 230))} min read`, eK = "full" === en ? "full" : eA ? "empty" : `${en}:${es}:${eg}`, eV = "done" === eW ? `done-${en}` : eW, eZ = "thinking" === eW || "streaming" === eW ? "running" : "error" === eW ? "error" : "result", eG = (() => {
      if ("full" === en)
        return eA ? null : (0, r.jsx)(Q, { article: e2, focus: ey, reduced: V2 });
      let t3 = eD?.instant || V2, a3 = "thinking" === eW;
      return (0, r.jsxs)("div", {
        className: F().gen,
        children: [
          (0, r.jsx)(l.N, {
            initial: false,
            children: a3 && (0, r.jsx)(
              d.PY1.span,
              {
                className: F().thinking,
                exit: { opacity: 0, transition: X },
                children: (0, r.jsx)(j.n, {
                  children: "points" === en ? "Finding key points" : `Reading ${H(e2.paragraphs.length, "paragraph")}`
                })
              },
              "thinking"
            )
          }),
          "summary" === en && eD && (0, r.jsx)("div", {
            className: F().summary,
            children: eD.paras.filter((e3) => e3.length).map(
              (e3, a4) => (0, r.jsx)(
                "p",
                {
                  children: t3 ? e3.join("") : e3.map(
                    (e4, t4) => (0, r.jsx)(
                      "span",
                      { className: F().chunk, children: e4 },
                      t4
                    )
                  )
                },
                a4
              )
            )
          }),
          "points" === en && eD && eD.points.length > 0 && (0, r.jsx)("ul", {
            className: F().points,
            children: eD.points.map((a4, i2) => {
              let n3, s2 = i2 < eD.points.length - 1 || "done" === eD.status, o2 = (n3 = a4.source, e2.paragraphs.findIndex((e3) => e3.id === n3) + 1);
              return (0, r.jsxs)(
                "li",
                {
                  className: Y(F().point, !t3 && F().enter),
                  children: [
                    (0, r.jsxs)("span", {
                      className: F().pointIcon,
                      "data-done": s2 || void 0,
                      "aria-hidden": "true",
                      children: [
                        (0, r.jsx)(c.A, {
                          size: 16,
                          className: F().pending
                        }),
                        (0, r.jsx)(u.A, { size: 16, className: F().check })
                      ]
                    }),
                    (0, r.jsx)("span", {
                      className: F().pointText,
                      children: t3 ? a4.chunks.join("") : a4.chunks.map(
                        (e3, t4) => (0, r.jsx)(
                          "span",
                          { className: F().chunk, children: e3 },
                          t4
                        )
                      )
                    }),
                    o2 > 0 && (eO ? (0, r.jsxs)("span", {
                      className: F().jumpSlot,
                      "aria-hidden": "true",
                      children: ["\xB6", o2]
                    }) : (0, r.jsx)(k.m, {
                      content: "Show in article",
                      children: (0, r.jsxs)("button", {
                        type: "button",
                        className: F().jump,
                        onClick: () => {
                          var t4;
                          let r2;
                          return t4 = a4.source, r2 = e2.paragraphs.findIndex(
                            (e3) => e3.id === t4
                          ), void (L2?.(t4), ex((e3) => ({
                            id: t4,
                            token: (e3?.token ?? 0) + 1
                          })), ew(
                            `Showing paragraph ${r2 + 1} in the article.`
                          ), eM("full"));
                        },
                        "aria-label": `Jump to paragraph ${o2}: ${a4.chunks.join("").trim()}`,
                        children: ["\xB6", o2]
                      })
                    }))
                  ]
                },
                i2
              );
            })
          }),
          "error" === eW && (0, r.jsxs)("div", {
            className: F().error,
            role: "alert",
            children: [
              (0, r.jsx)(h.A, { size: 16, "aria-hidden": "true" }),
              (0, r.jsxs)("div", {
                className: F().errorCopy,
                children: [
                  (0, r.jsxs)("p", {
                    className: F().errorTitle,
                    children: [
                      "Couldn\u2019t ",
                      "points" === en ? "find key points" : "summarize this article"
                    ]
                  }),
                  (0, r.jsxs)("p", {
                    className: F().errorText,
                    children: [
                      eD?.error,
                      e$ ? " Simulated, nothing was sent." : ""
                    ]
                  })
                ]
              })
            ]
          })
        ]
      });
    })();
    return (0, r.jsxs)("div", {
      ref: eS,
      className: Y(F().root, P2),
      onPointerDown: () => {
        eN.current = true;
      },
      onKeyDown: function(e3) {
        eN.current = true, "Escape" === e3.key && eO && (e3.preventDefault(), eP());
      },
      children: [
        (0, r.jsxs)("article", {
          className: F().card,
          "aria-busy": eO || void 0,
          children: [
            (0, r.jsxs)("header", {
              className: F().head,
              children: [
                e2.source && (0, r.jsxs)("div", {
                  className: F().source,
                  children: [
                    e2.source.mark && (0, r.jsx)("span", {
                      className: F().sourceMark,
                      children: e2.source.mark
                    }),
                    (0, r.jsx)("span", {
                      className: F().truncate,
                      children: e2.source.name
                    })
                  ]
                }),
                (0, r.jsx)("h3", { className: F().title, children: e2.title }),
                (0, r.jsxs)("div", {
                  className: F().byline,
                  children: [
                    e2.author && (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(x.e, {
                          name: e2.author.name,
                          src: e2.author.avatar,
                          size: "sm",
                          className: F().avatar
                        }),
                        (0, r.jsx)("span", {
                          className: F().author,
                          children: e2.author.name
                        }),
                        (0, r.jsx)("span", {
                          "aria-hidden": "true",
                          children: "\xB7"
                        })
                      ]
                    }),
                    (0, r.jsx)("span", {
                      className: F().truncate,
                      children: [e2.date, eq].filter(Boolean).join(" \xB7 ")
                    })
                  ]
                })
              ]
            }),
            (0, r.jsxs)("div", {
              className: F().controls,
              children: [
                (0, r.jsx)(b.A, {
                  label: "Reading mode",
                  options: q,
                  value: en,
                  onValueChange: (e3) => {
                    eN.current = true, eM(e3);
                  }
                }),
                (0, r.jsx)("div", {
                  className: F().length,
                  children: (0, r.jsx)(v.A, {
                    label: "Length",
                    value: eo,
                    min: 1,
                    max: 5,
                    step: 1,
                    marks: K,
                    format: (e3) => "points" === eH ? H(e3 + 2, "point") : `~${T[e3 - 1]} words`,
                    disabled: "full" === en || eA,
                    onValueChange: el,
                    onValueCommit: function(e3) {
                      let t3 = Math.min(5, Math.max(1, Math.round(e3)));
                      eN.current = true, t3 !== es && (void 0 === $2 && ei2(t3), E2?.(t3));
                    }
                  })
                })
              ]
            }),
            (0, r.jsx)("div", {
              ref: eT,
              className: F().clip,
              children: (0, r.jsxs)("div", {
                ref: eC,
                className: F().body,
                children: [
                  (0, r.jsx)(l.N, {
                    mode: "wait",
                    initial: false,
                    children: (0, r.jsx)(
                      d.PY1.div,
                      {
                        initial: { opacity: 0 },
                        animate: {
                          opacity: 1,
                          transition: V2 ? { duration: 0 } : G
                        },
                        exit: {
                          opacity: 0,
                          transition: V2 ? { duration: 0 } : X
                        },
                        children: eA ? (0, r.jsxs)("div", {
                          className: F().empty,
                          children: [
                            (0, r.jsx)(p.A, {
                              size: 16,
                              "aria-hidden": "true"
                            }),
                            (0, r.jsx)("span", {
                              children: "Nothing to summarize yet"
                            })
                          ]
                        }) : eG
                      },
                      eK
                    )
                  }),
                  (0, r.jsx)(l.N, {
                    initial: false,
                    children: "full" !== en && !eA && (0, r.jsxs)(
                      d.PY1.div,
                      {
                        className: F().foot,
                        initial: { opacity: 0 },
                        animate: { opacity: 1, transition: G },
                        exit: { opacity: 0, transition: { duration: 0 } },
                        children: [
                          (0, r.jsxs)("div", {
                            className: F().status,
                            children: [
                              a2.mark && (0, r.jsx)("span", {
                                className: F().modelMark,
                                children: a2.mark
                              }),
                              (0, r.jsx)("span", {
                                className: F().modelName,
                                children: a2.name
                              }),
                              (0, r.jsx)("span", {
                                className: F().dot,
                                "aria-hidden": "true",
                                children: "\xB7"
                              }),
                              (0, r.jsx)("span", {
                                className: F().stateSlot,
                                children: (0, r.jsx)(l.N, {
                                  mode: "wait",
                                  initial: false,
                                  children: (0, r.jsxs)(
                                    d.PY1.span,
                                    {
                                      className: F().state,
                                      "data-status": eW,
                                      initial: { opacity: 0 },
                                      animate: { opacity: 1, transition: G },
                                      exit: { opacity: 0, transition: X },
                                      children: [
                                        "thinking" === eW && "Thinking",
                                        "streaming" === eW && (0, r.jsx)(j.n, {
                                          children: "Writing"
                                        }),
                                        "done" === eW && (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            (0, r.jsx)(m.A, {
                                              size: 14,
                                              "aria-hidden": "true"
                                            }),
                                            "points" === en ? H(
                                              eD?.points.length ?? 0,
                                              "point"
                                            ) : H(eY, "word")
                                          ]
                                        }),
                                        "stopped" === eW && (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            (0, r.jsx)(g.A, {
                                              size: 14,
                                              "aria-hidden": "true"
                                            }),
                                            "Stopped"
                                          ]
                                        }),
                                        "error" === eW && (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            (0, r.jsx)(h.A, {
                                              size: 14,
                                              "aria-hidden": "true"
                                            }),
                                            "Failed"
                                          ]
                                        })
                                      ]
                                    },
                                    eV
                                  )
                                })
                              })
                            ]
                          }),
                          (0, r.jsx)("div", {
                            className: F().actions,
                            children: (0, r.jsx)(l.N, {
                              mode: "wait",
                              initial: false,
                              children: (0, r.jsxs)(
                                d.PY1.div,
                                {
                                  className: F().actionSet,
                                  "data-kind": eZ,
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1, transition: G },
                                  exit: { opacity: 0, transition: X },
                                  children: [
                                    "running" === eZ && (0, r.jsxs)(_.$, {
                                      variant: "ghost",
                                      size: "sm",
                                      className: F().action,
                                      onClick: eP,
                                      children: [
                                        (0, r.jsx)(f.A, {
                                          size: 10,
                                          fill: "currentColor",
                                          "aria-hidden": "true"
                                        }),
                                        "Stop"
                                      ]
                                    }),
                                    "result" === eZ && (0, r.jsxs)(r.Fragment, {
                                      children: [
                                        (0, r.jsx)(w.CopyButton, {
                                          value: eF,
                                          iconOnly: true,
                                          variant: "plain",
                                          label: "points" === en ? "Copy key points" : "Copy summary",
                                          className: F().iconAction,
                                          disabled: !eF
                                        }),
                                        (0, r.jsx)(k.m, {
                                          content: "Regenerate",
                                          children: (0, r.jsx)(_.$, {
                                            variant: "ghost",
                                            size: "sm",
                                            className: Y(
                                              F().action,
                                              F().iconAction
                                            ),
                                            onClick: eI,
                                            "aria-label": "Regenerate",
                                            children: (0, r.jsx)(y.A, {
                                              size: 16,
                                              "aria-hidden": "true"
                                            })
                                          })
                                        })
                                      ]
                                    }),
                                    "error" === eZ && (0, r.jsxs)(_.$, {
                                      variant: "primary",
                                      size: "sm",
                                      className: Y(F().action, F().retry),
                                      onClick: eI,
                                      children: [
                                        (0, r.jsx)(y.A, {
                                          size: 14,
                                          "aria-hidden": "true"
                                        }),
                                        "Try again"
                                      ]
                                    })
                                  ]
                                },
                                eZ
                              )
                            })
                          })
                        ]
                      },
                      "foot"
                    )
                  })
                ]
              })
            })
          ]
        }),
        (0, r.jsx)("div", {
          className: F().srOnly,
          role: "status",
          "aria-live": "polite",
          children: e_
        })
      ]
    });
  }
  var et = a(14537), ea = a.n(et);
  function er() {
    let [e2, t2] = (0, i.useState)(false), a2 = (0, i.useCallback)((t3) => D(t3, { fail: e2 }), [e2]);
    return (0, r.jsxs)("div", {
      className: ea().demo,
      children: [
        (0, r.jsx)(ee, { summarize: a2, autoPlay: true, simulated: true }),
        (0, r.jsx)("div", {
          className: ea().options,
          children: (0, r.jsx)(n.d, {
            label: "Simulate a failure",
            checked: e2,
            onCheckedChange: t2
          })
        })
      ]
    });
  }
  let ei = er;
}

__m(__module,__exports,__require);
});
A.regCss(14537, ".demo{display:flex;width:100%;flex-direction:column;align-items:center;gap:16px}\n.options{display:flex;width:100%;max-width:680px;justify-content:center;color:var(--text-secondary);font-size:var(--text-sm)}", {"demo":"demo","options":"options"});
A.reg(23723, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "circle-dashed",
    size: 24,
    node: [
      ["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0", key: "5ilxe3" }],
      ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0", key: "11zvb9" }],
      ["path", { d: "M17.609 3.721a10 10 0 0 1 2.69 2.7", key: "1iw5b2" }],
      ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8", key: "c0bmvh" }],
      ["path", { d: "M20.279 17.609a10 10 0 0 1-2.7 2.69", key: "1ruxm7" }],
      ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8", key: "qkgqxc" }],
      ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69", key: "1mcia2" }],
      ["path", { d: "M6.391 20.279a10 10 0 0 1-2.69-2.7", key: "1fvljs" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.regCss(44474, ".tldr-toggle_root___cEeU{container-type:inline-size;width:100%;max-width:680px;min-width:0;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}.tldr-toggle_srOnly__v__BO{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.tldr-toggle_card__7VkXu{border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface)}.tldr-toggle_head__FMf98{display:grid;gap:8px;padding:24px 24px 0}.tldr-toggle_source__gQbJz{display:flex;min-width:0;align-items:center;gap:8px;color:var(--text-secondary);font-size:var(--text-xs);line-height:16px}.tldr-toggle_sourceMark__Jts09{display:grid;flex:none;width:14px;height:14px;place-items:center;color:var(--foreground)}.tldr-toggle_sourceMark__Jts09 svg{display:block;width:14px;height:14px}.tldr-toggle_title__xTbOw{margin:0;font-size:var(--text-lg);font-weight:500;line-height:24px;letter-spacing:-.015em;text-wrap:balance}.tldr-toggle_byline__jsmEm{display:flex;min-width:0;align-items:center;gap:6px;margin-top:4px;color:var(--text-muted);font-size:var(--text-xs);line-height:16px}.tldr-toggle_byline__jsmEm .tldr-toggle_avatar__hoMGy{flex:none;width:20px;height:20px;margin-right:2px;font-size:8px}.tldr-toggle_author__n47iI{color:var(--text-secondary);white-space:nowrap}.tldr-toggle_truncate__j1IQE{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tldr-toggle_controls__DTP6h{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 24px;padding:20px 24px}.tldr-toggle_length__EYDoM{flex:1 1 180px;min-width:0;max-width:220px}.tldr-toggle_clip__z_32V{overflow:hidden;border-top:1px solid var(--border-subtle);border-radius:0 0 calc(var(--radius-panel) - 1px) calc(var(--radius-panel) - 1px)}.tldr-toggle_body__DF1bL{padding:20px 24px 24px}.tldr-toggle_article__hI8Cl{display:grid;gap:4px}.tldr-toggle_para__6m9M1{margin:0 -10px;border-radius:12px;padding:4px 10px;line-height:22px;transition:background-color .6s var(--ease-standard)}.tldr-toggle_para__6m9M1[data-lit]{background:color-mix(in oklab,var(--accent) 14%,transparent);transition-duration:.16s}.tldr-toggle_gen__9Xlm_{position:relative;min-height:22px}.tldr-toggle_thinking__Zs_da{position:absolute;top:0;left:0;max-width:100%;overflow:hidden;color:var(--text-muted);line-height:22px;white-space:nowrap}.tldr-toggle_summary__Pm7tf{display:grid;gap:12px}.tldr-toggle_summary__Pm7tf p{margin:0;line-height:22px}.tldr-toggle_chunk__KIk_G,.tldr-toggle_enter__kPvy7{animation:tldr-toggle_tldr-fade__72EP2 .14s var(--ease-standard) both}@keyframes tldr-toggle_tldr-fade__72EP2{0%{opacity:0}}.tldr-toggle_points__eTvF9{display:grid;margin:0;padding:0;list-style:none}.tldr-toggle_point__zbdqH{display:grid;grid-template-columns:16px minmax(0,1fr) auto;align-items:start;column-gap:12px;padding:10px 0}.tldr-toggle_point__zbdqH:first-child{padding-top:0}.tldr-toggle_point__zbdqH:last-child{padding-bottom:0}.tldr-toggle_point__zbdqH+.tldr-toggle_point__zbdqH{border-top:1px solid var(--border-subtle)}.tldr-toggle_pointIcon__lSKGS{position:relative;display:block;width:16px;height:16px;margin-top:3px}.tldr-toggle_pointIcon__lSKGS svg{position:absolute;inset:0;display:block;transition:opacity .16s var(--ease-standard),transform .16s var(--ease-standard)}.tldr-toggle_pending__cSyf2{color:var(--text-muted)}.tldr-toggle_check__Qgw94{color:var(--success);opacity:0;transform:scale(.8)}.tldr-toggle_pointIcon__lSKGS[data-done] .tldr-toggle_pending__cSyf2{opacity:0}.tldr-toggle_pointIcon__lSKGS[data-done] .tldr-toggle_check__Qgw94{opacity:1;transform:none}.tldr-toggle_pointText__d9eEi{min-width:0;line-height:22px}.tldr-toggle_jumpSlot__JVegm,.tldr-toggle_jump__9moj_{display:inline-flex;min-width:36px;height:28px;align-items:center;justify-content:center;margin:-3px -8px -3px 0;border-radius:10px;padding:0 8px;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;line-height:1;white-space:nowrap}.tldr-toggle_jumpSlot__JVegm{visibility:hidden}.tldr-toggle_jump__9moj_{border:0;background:transparent;font-family:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;animation:tldr-toggle_tldr-fade__72EP2 .16s var(--ease-standard) both;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.tldr-toggle_jump__9moj_:active{background:var(--surface-muted);color:var(--foreground)}@media (hover:hover) and (pointer:fine){.tldr-toggle_jump__9moj_:hover{background:var(--surface-muted);color:var(--foreground)}}.tldr-toggle_error__2m3mK{display:grid;grid-template-columns:16px minmax(0,1fr);column-gap:12px;color:var(--danger)}.tldr-toggle_error__2m3mK>svg{margin-top:3px}.tldr-toggle_errorCopy__tlwDt{display:grid;gap:2px;min-width:0}.tldr-toggle_errorTitle__HbZl5{margin:0;color:var(--foreground);font-weight:500;line-height:22px}.tldr-toggle_errorText__7G0o7{margin:0;color:var(--text-secondary);font-size:var(--text-xs);line-height:18px}.tldr-toggle_empty__bGLcu{display:flex;min-height:44px;align-items:center;gap:8px;color:var(--text-muted)}.tldr-toggle_empty__bGLcu svg{flex:none}.tldr-toggle_foot__YqxIn{display:flex;min-height:32px;align-items:center;justify-content:space-between;gap:12px;margin-top:16px}.tldr-toggle_status__FfINn{display:flex;min-width:0;align-items:center;gap:6px;color:var(--text-muted);font-size:var(--text-xs);line-height:16px}.tldr-toggle_modelMark__PSCau{display:grid;flex:none;width:14px;height:14px;place-items:center}.tldr-toggle_modelMark__PSCau svg{display:block;width:14px;height:14px}.tldr-toggle_modelName____Y7w{min-width:0;overflow:hidden;color:var(--text-secondary);text-overflow:ellipsis;white-space:nowrap}.tldr-toggle_dot__lLeJH{flex:none}.tldr-toggle_stateSlot__OdncY{display:inline-grid;flex:none}.tldr-toggle_state__dGY0_{display:inline-flex;align-items:center;gap:4px;white-space:nowrap}.tldr-toggle_state__dGY0_ svg{flex:none}.tldr-toggle_state__dGY0_[data-status=done] svg{color:var(--success)}.tldr-toggle_state__dGY0_[data-status=error]{color:var(--danger)}.tldr-toggle_actions__9DSxv{display:flex;flex:none;justify-content:flex-end}.tldr-toggle_actionSet__ZCztA{display:flex;align-items:center;gap:4px}.tldr-toggle_actionSet__ZCztA[data-kind=result]{margin-right:-8px}.tldr-toggle_actionSet__ZCztA[data-kind=running]{margin-right:-12px}.tldr-toggle_action__9upnq.tldr-toggle_action__9upnq{min-height:32px;height:32px;gap:6px;padding-inline:12px;font-size:var(--text-xs)}.tldr-toggle_iconAction__pMXcD.tldr-toggle_iconAction__pMXcD{width:32px;min-width:32px;height:32px;min-height:32px;justify-content:center;padding:0}.tldr-toggle_retry__4RhSB.tldr-toggle_retry__4RhSB{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}@media (prefers-reduced-motion:reduce){.tldr-toggle_chunk__KIk_G,.tldr-toggle_enter__kPvy7,.tldr-toggle_jump__9moj_{animation:none}}@media (prefers-reduced-motion:reduce){.tldr-toggle_para__6m9M1,.tldr-toggle_pointIcon__lSKGS svg{transition:none}}", {"root":"tldr-toggle_root___cEeU","srOnly":"tldr-toggle_srOnly__v__BO","card":"tldr-toggle_card__7VkXu","head":"tldr-toggle_head__FMf98","source":"tldr-toggle_source__gQbJz","sourceMark":"tldr-toggle_sourceMark__Jts09","title":"tldr-toggle_title__xTbOw","byline":"tldr-toggle_byline__jsmEm","avatar":"tldr-toggle_avatar__hoMGy","author":"tldr-toggle_author__n47iI","truncate":"tldr-toggle_truncate__j1IQE","controls":"tldr-toggle_controls__DTP6h","length":"tldr-toggle_length__EYDoM","clip":"tldr-toggle_clip__z_32V","body":"tldr-toggle_body__DF1bL","article":"tldr-toggle_article__hI8Cl","para":"tldr-toggle_para__6m9M1","gen":"tldr-toggle_gen__9Xlm_","thinking":"tldr-toggle_thinking__Zs_da","summary":"tldr-toggle_summary__Pm7tf","chunk":"tldr-toggle_chunk__KIk_G","enter":"tldr-toggle_enter__kPvy7","tldr-fade":"tldr-toggle_tldr-fade__72EP2","points":"tldr-toggle_points__eTvF9","point":"tldr-toggle_point__zbdqH","pointIcon":"tldr-toggle_pointIcon__lSKGS","pending":"tldr-toggle_pending__cSyf2","check":"tldr-toggle_check__Qgw94","pointText":"tldr-toggle_pointText__d9eEi","jump":"tldr-toggle_jump__9moj_","jumpSlot":"tldr-toggle_jumpSlot__JVegm","error":"tldr-toggle_error__2m3mK","errorCopy":"tldr-toggle_errorCopy__tlwDt","errorTitle":"tldr-toggle_errorTitle__HbZl5","errorText":"tldr-toggle_errorText__7G0o7","empty":"tldr-toggle_empty__bGLcu","foot":"tldr-toggle_foot__YqxIn","status":"tldr-toggle_status__FfINn","modelMark":"tldr-toggle_modelMark__PSCau","modelName":"tldr-toggle_modelName____Y7w","dot":"tldr-toggle_dot__lLeJH","stateSlot":"tldr-toggle_stateSlot__OdncY","state":"tldr-toggle_state__dGY0_","actions":"tldr-toggle_actions__9DSxv","actionSet":"tldr-toggle_actionSet__ZCztA","action":"tldr-toggle_action__9upnq","iconAction":"tldr-toggle_iconAction__pMXcD","retry":"tldr-toggle_retry__4RhSB"});
A.regCss(66754, ".root{--slider-thumb:22px;--slider-track:6px;display:grid;width:100%;min-width:0;color:var(--foreground);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body);user-select:none;-webkit-user-select:none}\n.root[data-dragging],.root[data-dragging] .control,.root[data-dragging] .thumb{cursor:grabbing}\n.root[data-disabled]{opacity:.5}\n.root[data-disabled] .control,.root[data-disabled] .markLabel,.root[data-disabled] .thumb{cursor:not-allowed}\n.header{display:flex;min-width:0;align-items:baseline;justify-content:space-between;gap:var(--space-4)}\n.label{min-width:0;font-weight:500}\n.readout{display:inline-flex;flex:none;align-items:center;gap:.3em;color:var(--text-secondary);font-variant-numeric:tabular-nums;white-space:nowrap}\n.dash{color:var(--text-muted)}\n.body{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center}\n.start{display:flex;grid-area:1/1;margin-right:var(--space-3)}\n.end{display:flex;grid-area:1/3;margin-left:var(--space-3)}\n.control{position:relative;grid-area:1/2;height:var(--control-height-md);cursor:pointer;touch-action:pan-y;-webkit-tap-highlight-color:transparent}\n.track{position:absolute;top:50%;right:calc(var(--slider-thumb) / 2);left:calc(var(--slider-thumb) / 2);height:var(--slider-track);margin-top:calc(var(--slider-track) / -2);border-radius:var(--radius-pill);background:var(--control-track)}\n.fill{position:absolute;inset:0;border-radius:inherit;background:var(--control-fill)}\n.fill .tick{background:color-mix(in oklab,var(--control-glyph) 60%,transparent)}\n.tick{position:absolute;top:50%;width:4px;height:4px;margin:-2px 0 0 -2px;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 30%,transparent)}\n.thumbs{position:absolute;inset:0 calc(var(--slider-thumb) / 2);container-type:inline-size;pointer-events:none}\n.thumbLayer{position:absolute;inset:0}\n.thumb{position:absolute;top:50%;right:0;box-sizing:border-box;width:var(--slider-thumb);height:var(--slider-thumb);translate:50% -50%;border:0;border-radius:var(--radius-pill);background:var(--control-thumb);box-shadow:var(--control-thumb-shadow);pointer-events:auto;cursor:grab;transition:box-shadow var(--duration-fast) var(--ease-standard)}\n.thumb:after{content:\"\";position:absolute;inset:-11px;border-radius:inherit}\n@media (prefers-reduced-motion:reduce){.markLabel,.thumb{transition:none}\n.bubbleAnchor{--edge:calc(var(--slider-thumb) / 2);--x:calc(var(--at, 0) * 1cqw);position:absolute;right:0;bottom:calc(50% + var(--slider-thumb) / 2 + 8px);display:flex;translate:clamp(calc(100% - var(--edge) - var(--x)),50%,calc(100cqw + var(--edge) - var(--x))) 0;pointer-events:none}\n@media (pointer:coarse){.bubbleAnchor{bottom:calc(50% + var(--slider-thumb) / 2 + 18px)}\n.bubble{display:inline-flex;min-height:1.75rem;align-items:center;padding:0 var(--space-3);border:1px solid color-mix(in oklab,var(--background) 14%,var(--foreground));border-radius:var(--radius-pill);background:var(--foreground);color:var(--background);box-shadow:var(--shadow-raised);font-size:var(--text-sm);font-weight:500;white-space:nowrap;transform-origin:50% 100%}\n.marks{position:relative;grid-area:2/2;height:1.25rem;margin:calc(var(--space-1) * -1) calc(var(--slider-thumb) / 2) 0;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.markLabel{position:absolute;top:0;translate:-50% 0;white-space:nowrap;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.markLabel[data-edge=start]{translate:max(-50%,calc(var(--slider-thumb) / -2)) 0}\n.markLabel[data-edge=end]{translate:min(-50%,calc(-100% + var(--slider-thumb) / 2)) 0}\n.markLabel[data-on]{color:var(--text-secondary)}\n@media (hover:hover) and (pointer:fine){.markLabel:hover{color:var(--foreground)}\n.number{display:inline-flex;align-items:center;white-space:nowrap;font-variant-numeric:tabular-nums}\n.column{--feather:.2em;position:relative;display:inline-block;overflow-x:visible;overflow-y:clip;margin-block:calc(var(--feather) * -1);padding-block:var(--feather);mask-image:linear-gradient(to bottom,transparent,#000 calc(var(--feather) * 1.5),#000 calc(100% - var(--feather) * 1.5),transparent)}\n.sizer{visibility:hidden}\n.glyph{position:absolute;inset:var(--feather) 0;text-align:center}\n.symbol{display:inline-block;overflow-x:clip;white-space:pre}", {});
A.reg(74336, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var r = a(51811);
  let s = {
    name: "circle-stop",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      [
        "rect",
        { x: "9", y: "9", width: "6", height: "6", rx: "1", key: "1ssd4o" }
      ]
    ],
    aliases: ["stop-circle"]
  };
  s.node;
  let n = (0, r.A)(s);
}

__m(__module,__exports,__require);
});
A.reg(94274, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => D });
  var i = a(95155), r = a(12115), n = a(55809), l = a(25354), s = a(18310), u = a(28245), o = a(92171), d = a(80642), c = a(7770), p = a(66754), m = a.n(p);
  let { spring: h, duration: f, blur: b } = c.T, x = [...c.T.ease.enter], g = [...c.T.ease.standard], y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], _ = ({ visualDuration: e2, bounce: t2 }) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * (1 - t2) * a2,
      restDelta: 2e-3,
      restSpeed: 0.02
    };
  }, v = _(h.snappy), j = _(h.morph), w = 9, N = (e2) => (String(e2).split(".")[1] ?? "").length, k = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), $ = (e2) => e2 >= "0" && e2 <= "9", M = {
    enter: (e2) => ({
      width: 0,
      scale: 0.6,
      opacity: 0,
      y: `${0.3 * e2}em`,
      filter: `blur(${b.soft}px)`
    }),
    center: {
      width: "auto",
      scale: 1,
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transitionEnd: { filter: "none" },
      transition: {
        width: h.morph,
        scale: h.morph,
        opacity: h.morph,
        y: h.snappy,
        filter: { duration: f.standard, ease: x }
      }
    },
    exit: (e2) => ({
      width: 0,
      scale: 0.6,
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${b.subtle}px)`,
      transition: {
        width: h.smooth,
        scale: h.smooth,
        y: { duration: f.fast, ease: g },
        opacity: { duration: f.instant },
        filter: { duration: f.instant }
      }
    })
  }, P = {
    enter: { width: "auto", scale: 1, opacity: 0, y: 0, filter: "none" },
    center: {
      width: "auto",
      scale: 1,
      opacity: 1,
      y: 0,
      filter: "none",
      transition: { duration: f.instant }
    },
    exit: { width: 0, opacity: 0, transition: { duration: 0 } }
  };
  function F({ position: e2, digit: t2 }) {
    let a2 = (e3) => ((t2 - e3) % 10 + 15) % 10 - 5, r2 = (0, n.G)(e2, (e3) => `${1.05 * a2(e3)}em`), s2 = (0, n.G)(e2, (e3) => Math.max(0, 1 - Math.abs(a2(e3)) ** 1.5 * 1.1)), u2 = (0, n.G)(e2, (e3) => Math.abs(a2(e3)) >= 1 ? "hidden" : "visible"), o2 = (0, n.G)(e2, (e3) => {
      let t3 = Math.abs(a2(e3));
      return t3 < 0.02 || t3 >= 1 ? "none" : `blur(${(t3 * b.soft * 0.75).toFixed(2)}px)`;
    });
    return (0, i.jsx)(l.PY1.span, {
      className: m().glyph,
      style: { y: r2, opacity: s2, filter: o2, visibility: u2 },
      children: t2
    });
  }
  function S({ digit: e2, direction: t2 }) {
    let a2 = (0, s.I)(), n2 = (0, u.d)(e2), l2 = (0, r.useRef)({ digit: e2, target: e2 });
    return (0, r.useLayoutEffect)(() => {
      let i2 = l2.current;
      i2.digit !== e2 && (i2.target += t2 > 0 ? (e2 - i2.digit + 10) % 10 : -((i2.digit - e2 + 10) % 10), i2.digit = e2, a2 ? n2.jump(i2.target) : (0, o.i)(n2, i2.target, v));
    }, [e2, t2, n2, a2]), (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", { className: m().sizer, children: "0" }),
        y.map((e3) => (0, i.jsx)(F, { position: n2, digit: e3 }, e3))
      ]
    });
  }
  function I({ value: e2, text: t2 }) {
    let a2, n2, u2, o2, c2 = (0, s.I)(), [p2, h2] = (0, r.useState)({ value: e2, direction: 1 });
    p2.value !== e2 && h2({ value: e2, direction: e2 > p2.value ? 1 : -1 });
    let f2 = p2.value === e2 ? p2.direction : e2 > p2.value ? 1 : -1;
    return (0, i.jsx)("span", {
      className: m().number,
      children: (0, i.jsx)(d.N, {
        initial: false,
        custom: f2,
        children: (n2 = (a2 = [...t2]).findIndex($), u2 = a2.length - 1 - [...a2].reverse().findIndex($), o2 = a2.filter($).length, a2.map(
          (e3, t3) => n2 < 0 || t3 < n2 ? { key: `p${t3}${e3}`, text: e3 } : t3 > u2 ? { key: `s${a2.length - t3}${e3}`, text: e3 } : $(e3) ? { key: `d${--o2}`, digit: Number(e3) } : { key: `g${o2}${e3}`, text: e3 }
        )).map(
          (e3) => (0, i.jsx)(
            l.PY1.span,
            {
              className: "digit" in e3 ? m().column : m().symbol,
              custom: f2,
              variants: c2 ? P : M,
              initial: "enter",
              animate: "center",
              exit: "exit",
              children: "digit" in e3 ? (0, i.jsx)(S, { digit: e3.digit, direction: f2 }) : e3.text
            },
            e3.key
          )
        )
      })
    });
  }
  let A = { opacity: 0, scale: 0.6, y: 6, filter: `blur(${b.subtle}px)` }, L = {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transitionEnd: { filter: "none" }
  }, G = {
    opacity: 0,
    scale: 0.8,
    y: 4,
    filter: `blur(${b.subtle}px)`,
    transition: { duration: f.instant, ease: g }
  }, R = {
    ...h.snappy,
    opacity: { duration: f.fast, ease: x },
    filter: { duration: f.fast, ease: x }
  };
  function C({
    quiet: e2,
    index: t2,
    shown: a2,
    value: r2,
    text: u2,
    low: o2,
    high: c2,
    ariaLabel: p2,
    labelledBy: b2,
    active: x2,
    lifted: g2,
    bubble: y2,
    disabled: _2,
    onKeyDown: v2,
    onFocus: j2,
    onBlur: w2
  }) {
    let N2 = (0, s.I)(), k2 = (0, n.G)(a2, (e3) => `${e3 - 100}%`);
    return (0, i.jsxs)(l.PY1.div, {
      className: m().thumbLayer,
      style: { x: k2, zIndex: x2 ? 2 : 1 },
      children: [
        (0, i.jsx)(l.PY1.div, {
          role: "slider",
          "data-thumb": "",
          "data-index": t2,
          "data-active": g2 || void 0,
          "data-quiet": e2 || void 0,
          className: m().thumb,
          tabIndex: _2 ? -1 : 0,
          "aria-label": p2,
          "aria-labelledby": p2 ? void 0 : b2,
          "aria-valuemin": o2,
          "aria-valuemax": c2,
          "aria-valuenow": r2,
          "aria-valuetext": u2,
          "aria-orientation": "horizontal",
          "aria-disabled": _2 || void 0,
          initial: false,
          animate: { scale: g2 ? 1.16 : 1 },
          transition: N2 ? { duration: 0 } : h.snappy,
          onKeyDown: v2,
          onFocus: j2,
          onBlur: w2
        }),
        (0, i.jsx)(l.PY1.span, {
          className: m().bubbleAnchor,
          style: { "--at": a2 },
          children: (0, i.jsx)(d.N, {
            children: y2 && (0, i.jsx)(
              l.PY1.span,
              {
                className: m().bubble,
                "aria-hidden": "true",
                initial: N2 ? { opacity: 0 } : A,
                animate: L,
                exit: N2 ? { opacity: 0, transition: { duration: f.instant } } : G,
                transition: N2 ? { duration: f.instant } : R,
                children: (0, i.jsx)(I, { value: r2, text: u2 })
              },
              "bubble"
            )
          })
        })
      ]
    });
  }
  function D({
    label: e2,
    value: t2,
    defaultValue: a2,
    onValueChange: d2,
    onValueCommit: c2,
    min: p2 = 0,
    max: h2 = 100,
    step: f2 = 1,
    largeStep: b2,
    marks: x2,
    minStepsBetweenThumbs: g2 = 0,
    format: y2,
    showValue: _2 = true,
    thumbLabels: $2,
    start: M2,
    end: P2,
    name: F2,
    disabled: S2,
    className: A2
  }) {
    let L2 = (0, s.I)(), G2 = (0, r.useId)(), R2 = f2 > 0 ? f2 : 1, E = h2 - p2 || 1, T = Array.isArray(t2 ?? a2), z = (e3) => void 0 === e3 ? [p2, h2].slice(0, T ? 2 : 1) : Array.isArray(e3) ? [e3[0], e3[1]] : [e3], [B, Y] = (0, r.useState)(() => z(a2)), Z = void 0 === t2 ? B : z(t2), q = Math.max(N(R2), N(p2)), U = y2 ?? ((e3) => e3.toLocaleString("en-US", {
      minimumFractionDigits: q,
      maximumFractionDigits: q
    })), V = T ? g2 * R2 : 0, K = (e3) => (e3 - p2) / E * 100, X = (e3) => p2 + e3 / 100 * E, H = (e3) => Number((p2 + Math.round((e3 - p2) / R2) * R2).toFixed(q)), Q = (e3, t3) => 1 === e3 ? t3[0] + V : p2, W = (e3, t3) => 0 === e3 && T ? t3[1] - V : h2, O = (e3, t3, a3) => k(H(k(t3, p2, h2)), Q(e3, a3), W(e3, a3)), J = (0, r.useRef)(null), ee = (0, r.useRef)(null), et = (0, r.useRef)(Z), ea = (0, r.useRef)(Z.map(K)), ei = (0, r.useRef)(null), er = (0, r.useRef)(false), en = (0, r.useRef)(void 0), [el, es] = (0, r.useState)(null), [eu, eo] = (0, r.useState)(null), [ed, ec] = (0, r.useState)(null), [ep, em] = (0, r.useState)(+!!T), [eh, ef] = (0, r.useState)(null), eb = (0, u.d)(K(Z[0])), ex = (0, u.d)(K(Z[1] ?? Z[0])), eg = (0, u.d)(0), ey = (0, u.d)(0), e_ = (0, n.G)(() => eb.get() + eg.get()), ev = (0, n.G)(() => ex.get() + ey.get()), ej = (0, n.G)(() => {
      let e3 = T ? k(e_.get(), 0, 100) : 0, t3 = k((T ? ev : e_).get(), 0, 100);
      return `inset(0 ${(100 - t3).toFixed(3)}% 0 ${e3.toFixed(3)}% round 999px)`;
    }), ew = [
      { pos: eb, lag: eg, shown: e_ },
      { pos: ex, lag: ey, shown: ev }
    ], eN = (e3) => T ? [e3[0], e3[1]] : e3[0];
    function ek(e3, a3) {
      let i2 = et.current;
      if (i2[e3] === a3) return;
      let r2 = i2.map((t3, i3) => i3 === e3 ? a3 : t3);
      et.current = r2, void 0 === t2 && Y(r2), d2?.(eN(r2));
    }
    function e$(e3) {
      let t3 = ee.current?.querySelector(`[data-index="${e3}"]`);
      t3 && document.activeElement !== t3 && (ef(e3), er.current = true, t3.focus({ preventScroll: true }), er.current = false);
    }
    (0, r.useLayoutEffect)(() => {
      et.current = Z, Z.forEach((e3, t3) => {
        let a3 = K(e3), i2 = ew[t3];
        if (ei.current?.index === t3 || ea.current[t3] === a3) return;
        ea.current[t3] = a3;
        let r2 = i2.pos.get() + i2.lag.get();
        i2.lag.jump(0), i2.pos.jump(r2), L2 ? i2.pos.jump(a3) : (0, o.i)(i2.pos, a3, v);
      });
    }), (0, r.useEffect)(() => () => window.clearTimeout(en.current), []);
    let eM = () => J.current?.getBoundingClientRect().width || 1;
    function eP(e3, t3) {
      if (!T) return 0;
      let a3 = Math.abs(e3 - K(t3[0])), i2 = Math.abs(e3 - K(t3[1]));
      return a3 === i2 ? e3 < K(t3[0]) ? 0 : 1 : a3 < i2 ? 0 : 1;
    }
    function eF(e3, t3, a3, i2) {
      let r2 = ew[t3], n2 = r2.pos.get() + r2.lag.get();
      e3.index = t3, e3.grab = i2 ? 0 : a3 - n2, r2.lag.jump(0), r2.pos.jump(n2), es(t3), em(t3), window.clearTimeout(en.current), ec(null), e$(t3), i2 && eS(e3, a3, 0, true);
    }
    function eS(e3, t3, a3, i2 = false) {
      let r2 = e3.index;
      if (null === r2) return;
      let n2 = ew[r2], l2 = et.current, s2 = eM(), u2 = t3 - e3.grab, d3 = k(u2, K(Q(r2, l2)), K(W(r2, l2))), c3 = L2 ? d3 : d3 + ((e4, t4 = w) => Math.sign(e4) * (1 - 1 / (0.55 * Math.abs(e4) / t4 + 1)) * t4)(
        (u2 - d3) / 100 * s2
      ) / s2 * 100;
      if (i2 && !L2) {
        let e4 = n2.pos.get();
        n2.pos.jump(c3), n2.lag.jump(e4 - c3), (0, o.i)(n2.lag, 0, v);
      } else n2.pos.set(c3);
      e3.raw = u2, e3.samples.push({ t: a3, p: c3 }), e3.samples.length > 6 && e3.samples.shift(), ek(r2, O(r2, X(u2), l2));
    }
    function eI(e3) {
      let t3 = ei.current;
      if (!t3 || t3.pointer !== e3.pointerId) return;
      ei.current = null;
      let a3 = t3.index;
      if (null === a3) return;
      let i2 = ew[a3], r2 = et.current, n2 = eM(), l2 = t3.samples, s2 = l2[0], u2 = l2[l2.length - 1], d3 = u2 && s2 ? (u2.t - s2.t) / 1e3 : 0, p3 = (u2 && s2 && d3 > 8e-3 && e3.timeStamp - u2.t < 60 ? (u2.p - s2.p) / d3 : 0) + i2.lag.getVelocity(), m2 = R2 / E * 100, h3 = "pointerup" === e3.type && m2 / 100 * n2 >= 12 ? k(0.099 * p3, -m2, m2) : 0, f3 = O(a3, X(t3.raw + h3), r2), b3 = i2.pos.get() + i2.lag.get(), x3 = K(f3);
      i2.lag.jump(0), i2.pos.jump(b3), ea.current[a3] = x3, L2 ? i2.pos.jump(x3) : (0, o.i)(i2.pos, x3, { ...v, velocity: p3 }), ek(a3, f3), es(null), window.clearTimeout(en.current), ec(a3), en.current = window.setTimeout(() => ec(null), 700), c2?.(eN(et.current));
    }
    let eA = (x2 ?? []).map((e3) => "number" == typeof e3 ? { value: e3 } : e3).filter((e3) => e3.value >= p2 && e3.value <= h2), eL = eA.filter((e3) => e3.value > p2 && e3.value < h2), eG = eA.filter((e3) => e3.label), eR = $2 ?? [`${e2}, minimum`, `${e2}, maximum`];
    return (0, i.jsxs)("div", {
      className: [m().root, A2].filter(Boolean).join(" "),
      "data-disabled": S2 || void 0,
      "data-dragging": null !== el || void 0,
      "data-marks": eG.length > 0 || void 0,
      children: [
        (0, i.jsxs)("div", {
          className: m().header,
          children: [
            (0, i.jsx)("span", { id: G2, className: m().label, children: e2 }),
            _2 && (0, i.jsxs)("span", {
              className: m().readout,
              "aria-hidden": "true",
              children: [
                (0, i.jsx)(I, { value: Z[0], text: U(Z[0]) }),
                T && (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("span", {
                      className: m().dash,
                      children: "\u2013"
                    }),
                    (0, i.jsx)(I, { value: Z[1], text: U(Z[1]) })
                  ]
                })
              ]
            })
          ]
        }),
        (0, i.jsxs)("div", {
          className: m().body,
          children: [
            M2 && (0, i.jsx)("div", { className: m().start, children: M2 }),
            (0, i.jsxs)("div", {
              className: m().control,
              onPointerDown: function(e3) {
                if (S2 || 0 !== e3.button || !e3.isPrimary) return;
                let t3 = J.current?.getBoundingClientRect();
                if (!t3) return;
                let a3 = (e3.clientX - t3.left) / (t3.width || 1) * 100, i2 = e3.target.closest("[data-thumb]"), r2 = et.current;
                e3.currentTarget.setPointerCapture(e3.pointerId);
                let n2 = {
                  pointer: e3.pointerId,
                  index: null,
                  grab: 0,
                  x: e3.clientX,
                  raw: a3,
                  samples: []
                };
                (ei.current = n2, i2 && T && r2[0] === r2[1]) ? e$(Number(i2.dataset.index)) : (eF(n2, i2 ? Number(i2.dataset.index) : eP(a3, r2), a3, !i2), n2.samples = [
                  { t: e3.timeStamp, p: ew[n2.index ?? 0].pos.get() }
                ]);
              },
              onPointerMove: function(e3) {
                let t3 = ei.current;
                if (!t3 || t3.pointer !== e3.pointerId) return;
                let a3 = J.current?.getBoundingClientRect();
                if (!a3) return;
                let i2 = (e3.clientX - a3.left) / (a3.width || 1) * 100;
                if (null === t3.index) {
                  let r2 = e3.clientX - t3.x;
                  if (2 > Math.abs(r2)) return;
                  eF(t3, r2 < 0 ? 0 : 1, i2 - r2 / (a3.width || 1) * 100, false);
                }
                eS(t3, i2, e3.timeStamp);
              },
              onPointerUp: eI,
              onPointerCancel: eI,
              onLostPointerCapture: eI,
              onMouseDown: (e3) => e3.preventDefault(),
              children: [
                (0, i.jsxs)("div", {
                  ref: J,
                  className: m().track,
                  children: [
                    eL.map(
                      (e3) => (0, i.jsx)(
                        "span",
                        {
                          className: m().tick,
                          style: { left: `${K(e3.value)}%` }
                        },
                        e3.value
                      )
                    ),
                    (0, i.jsx)(l.PY1.div, {
                      className: m().fill,
                      style: { clipPath: ej },
                      children: eL.map(
                        (e3) => (0, i.jsx)(
                          "span",
                          {
                            className: m().tick,
                            style: { left: `${K(e3.value)}%` }
                          },
                          e3.value
                        )
                      )
                    })
                  ]
                }),
                (0, i.jsx)("div", {
                  ref: ee,
                  className: m().thumbs,
                  children: Z.map(
                    (e3, t3) => (0, i.jsx)(
                      C,
                      {
                        quiet: eh === t3,
                        index: t3,
                        shown: ew[t3].shown,
                        value: e3,
                        text: U(e3),
                        low: Q(t3, Z),
                        high: W(t3, Z),
                        ariaLabel: T ? eR[t3] : void 0,
                        labelledBy: G2,
                        active: ep === t3,
                        lifted: el === t3,
                        bubble: el === t3 || eu === t3 || ed === t3,
                        disabled: S2,
                        onKeyDown: (e4) => (function(e5, t4) {
                          let a3;
                          if (S2) return;
                          let i2 = et.current, r2 = i2[e5], n2 = b2 ?? Math.max(R2, H(p2 + E / 10) - p2), l2 = {
                            ArrowRight: R2,
                            ArrowUp: R2,
                            ArrowLeft: -R2,
                            ArrowDown: -R2,
                            PageUp: n2,
                            PageDown: -n2
                          };
                          if ("Home" === t4.key) a3 = Q(e5, i2);
                          else if ("End" === t4.key) a3 = W(e5, i2);
                          else {
                            if (!(t4.key in l2)) return;
                            a3 = r2 + (t4.shiftKey && /^Arrow/.test(t4.key) ? Math.sign(l2[t4.key]) * n2 : l2[t4.key]);
                          }
                          t4.preventDefault(), eo(e5), ef(null), em(e5);
                          let s2 = O(e5, a3, i2);
                          if (s2 === r2) {
                            let t5 = Math.sign(a3 - r2);
                            t5 && !L2 && (0, o.i)(ew[e5].pos, ea.current[e5], {
                              ...j,
                              velocity: 150 * t5 / eM() * 100
                            });
                            return;
                          }
                          ek(e5, s2), c2?.(eN(et.current));
                        })(t3, e4),
                        onFocus: (e4) => {
                          !er.current && e4.currentTarget.matches(":focus-visible") && eo(t3);
                        },
                        onBlur: () => {
                          eo((e4) => e4 === t3 ? null : e4), ef((e4) => e4 === t3 ? null : e4);
                        }
                      },
                      t3
                    )
                  )
                })
              ]
            }),
            P2 && (0, i.jsx)("div", { className: m().end, children: P2 }),
            eG.length > 0 && (0, i.jsx)("div", {
              className: m().marks,
              "aria-hidden": "true",
              children: eG.map((e3) => {
                let t3;
                return (0, i.jsx)(
                  "span",
                  {
                    className: m().markLabel,
                    "data-on": (t3 = e3.value, (T ? t3 >= Z[0] && t3 <= Z[1] : t3 <= Z[0]) || void 0),
                    "data-edge": e3.value === p2 ? "start" : e3.value === h2 ? "end" : void 0,
                    style: { left: `${K(e3.value)}%` },
                    onClick: () => (function(e4) {
                      if (S2) return;
                      let t4 = et.current, a3 = eP(K(e4), t4), i2 = O(a3, e4, t4);
                      em(a3), e$(a3), i2 !== t4[a3] && (ek(a3, i2), c2?.(eN(et.current)));
                    })(e3.value),
                    children: e3.label
                  },
                  e3.value
                );
              })
            })
          ]
        }),
        F2 && Z.map(
          (e3, t3) => (0, i.jsx)(
            "input",
            { type: "hidden", name: F2, value: e3, disabled: S2 },
            t3
          )
        )
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.cssFor("tldr-toggle", [14537,44474,66754]);
A.item("tldr-toggle", {entry:7191, export:"TldrToggleDemo", kind:"component", tier:"pro", unresolved:[]});
})();