function(__module,__exports,__require){
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
}