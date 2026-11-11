function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ReasoningTreeDemo: () => B, default: () => O });
  var r = a(95155), n = a(12115), s = a(80642), i = a(25354), l = a(18310), o = a(64962), d = a(79267), h = a(36619), c = a(24860), u = a(92298), p = a(51288), f = a(66558), m = a(36690), x = a(7770);
  let g = "Which release plan ships by Friday?", y = [
    {
      id: "scope",
      label: "Cut scope to core",
      score: 0.82,
      text: "Ship the billing fixes and the new onboarding, and move CSV export to v2.5.",
      children: [
        {
          id: "freeze",
          label: "Freeze Wednesday",
          score: 0.86,
          text: "Freeze the release branch Wednesday at 18:00 and give QA all of Thursday.",
          children: [
            {
              id: "thursday",
              label: "Ship Thursday",
              score: 0.9,
              text: "Tag v2.4 Thursday at 14:00 and keep Friday free for hotfixes."
            },
            {
              id: "friday-am",
              label: "Ship Friday 09:00",
              score: 0.71,
              text: "Tag v2.4 Friday at 09:00 after one more QA pass, with no buffer left."
            }
          ]
        },
        {
          id: "skip-qa",
          label: "Skip manual QA",
          score: 0.31,
          text: "Skip manual QA and rely on the automated suite, which covers about 70% of billing.",
          children: [
            {
              id: "wednesday",
              label: "Ship Wednesday",
              score: 0.27,
              text: "Tag v2.4 Wednesday night and watch error rates through Thursday."
            },
            {
              id: "patch",
              label: "Patch forward",
              score: 0.22,
              text: "Ship Thursday and patch anything manual QA would have caught next week."
            }
          ]
        }
      ]
    },
    {
      id: "staff",
      label: "Add two engineers",
      score: 0.38,
      text: "Borrow two engineers from the mobile team to finish every planned feature on time.",
      children: [
        {
          id: "onboard",
          label: "Onboard on Monday",
          score: 0.34,
          text: "Spend Monday walking the two engineers through the billing code before they pick up tickets.",
          children: [
            {
              id: "friday-pm",
              label: "Ship Friday 17:00",
              score: 0.3,
              text: "Ship Friday at 17:00 once the new engineers have closed their tickets."
            },
            {
              id: "monday",
              label: "Slip to Monday",
              score: 0.41,
              text: "Accept a Monday release so onboarding does not squeeze QA."
            }
          ]
        },
        {
          id: "pair",
          label: "Pair on CSV export",
          score: 0.49,
          text: "Pair the new engineers on CSV export while the core team finishes the rest.",
          children: [
            {
              id: "export-thu",
              label: "Export by Thursday",
              score: 0.52,
              text: "Merge CSV export Thursday and ship everything Friday at noon."
            },
            {
              id: "drop-export",
              label: "Drop export if late",
              score: 0.58,
              text: "Ship Friday and drop CSV export if the pair has not merged it by Thursday."
            }
          ]
        }
      ]
    },
    {
      id: "flags",
      label: "Flag risky features",
      score: 0.74,
      text: "Ship everything, but keep CSV export and the new editor behind feature flags.",
      children: [
        {
          id: "flags-off",
          label: "Flags off in prod",
          score: 0.66,
          text: "Merge both features with their flags off in production and on in staging.",
          children: [
            {
              id: "next-week",
              label: "Flags on next week",
              score: 0.76,
              text: "Ship Thursday with both flags off and turn them on next week."
            },
            {
              id: "staff-first",
              label: "Staff only first",
              score: 0.81,
              text: "Ship Thursday and turn both flags on for internal workspaces only."
            }
          ]
        },
        {
          id: "rollout",
          label: "Stage the rollout",
          score: 0.79,
          text: "Turn the flags on for 10% of workspaces Thursday and for everyone Friday morning.",
          children: [
            {
              id: "ramp",
              label: "10% first, all Friday",
              score: 0.94,
              text: "Ship Thursday with the flags on for 10% of workspaces, then turn them on for everyone Friday at 10:00 if error rates hold."
            },
            {
              id: "rollback",
              label: "Roll back on errors",
              score: 0.87,
              text: "Ship Thursday at 10% and roll the flags back automatically if checkout errors rise above 0.5%."
            }
          ]
        }
      ]
    }
  ], _ = (e2, t2) => t2.score - e2.score || e2.order - t2.order, w = (e2, t2) => e2.order - t2.order;
  function b(e2, t2) {
    if (t2 <= 0 || !e2.levels.length)
      return { phase: t2 > 0 ? "answer" : "question", depth: 0 };
    if (t2 >= e2.finalStep) return { phase: "answer", depth: e2.levels.length };
    let a2 = Math.floor((t2 - 1) / 3) + 1, r2 = (t2 - 1) % 3;
    return {
      phase: 0 === r2 ? "propose" : 1 === r2 ? "score" : "prune",
      depth: a2
    };
  }
  let v = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), k = (e2) => e2.reduce((e3, t2) => e3 + t2, 0) / e2.length, $ = (e2) => Math.round(10 * e2) / 10;
  function j(e2, t2, a2) {
    if ("wide" === e2) {
      let e3 = t2.x + t2.w, r3 = t2.y + t2.h / 2, n3 = a2.x, s3 = a2.y + a2.h / 2, i2 = (e3 + n3) / 2;
      return `M${$(e3)} ${$(r3)}C${$(i2)} ${$(r3)} ${$(i2)} ${$(s3)} ${$(n3)} ${$(s3)}`;
    }
    let r2 = t2.x + 9, n2 = t2.y + t2.h, s2 = a2.y + a2.h / 2;
    return `M${$(r2)} ${$(n2)}V${$(s2 - 4)}Q${$(r2)} ${$(s2)} ${$(r2 + 4)} ${$(s2)}H${$(a2.x)}`;
  }
  function S(e2, t2) {
    if (t2.length < 2) return "";
    if ("wide" === e2) {
      let e3 = `M${$(t2[0].x + t2[0].w)} ${$(t2[0].y + t2[0].h / 2)}`;
      for (let a3 = 1; a3 < t2.length; a3++) {
        let r2 = t2[a3 - 1], n2 = t2[a3], s2 = r2.x + r2.w, i2 = r2.y + r2.h / 2, l2 = n2.x, o2 = n2.y + n2.h / 2, d2 = (s2 + l2) / 2;
        e3 += `C${$(d2)} ${$(i2)} ${$(d2)} ${$(o2)} ${$(l2)} ${$(o2)}`, a3 < t2.length - 1 && (e3 += `H${$(n2.x + n2.w)}`);
      }
      return e3;
    }
    let a2 = `M${$(t2[0].x + 9)} ${$(t2[0].y + t2[0].h)}`;
    for (let e3 = 1; e3 < t2.length; e3++) {
      let r2 = t2[e3 - 1], n2 = t2[e3], s2 = r2.x + 9, i2 = n2.y + n2.h / 2;
      e3 > 1 && (a2 += `H${$(s2)}V${$(r2.y + r2.h)}`), a2 += `V${$(i2 - 4)}Q${$(s2)} ${$(i2)} ${$(s2 + 4)} ${$(i2)}H${$(n2.x)}`;
    }
    return a2;
  }
  var M = a(76906), N = a.n(M);
  let A = {
    name: "Claude Opus 5.5",
    mark: (0, r.jsx)(function(e2) {
      return (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "#D97757",
        "aria-hidden": "true",
        focusable: "false",
        ...e2,
        children: (0, r.jsx)("path", {
          d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
        })
      });
    }, {})
  }, T = { question: 560, propose: 620, score: 880, prune: 760, answer: 4200 }, L = [1, 2, 3], R = (e2) => Math.min(3, Math.max(1, Math.round(e2) || 1)), C = () => () => {
  }, E = (e2, t2) => `${e2} ${t2}${1 === e2 ? "" : "s"}`;
  function P(e2) {
    return { id: e2.id, label: e2.label, text: e2.text, score: e2.score };
  }
  function F(e2, t2) {
    if (0 === e2.depth) return "Question";
    if (!t2.scored) return "Not scored yet";
    let a2 = "answer" === t2.status ? "Answer" : "kept" === t2.status ? t2.onPath ? "On the best path" : "Kept" : "pruned" === t2.status ? "Pruned" : "Scored";
    return `Score ${e2.score.toFixed(2)} \xB7 ${a2}`;
  }
  function I(e2, t2) {
    let { phase: a2, depth: r2 } = b(e2, t2), n2 = e2.levels[r2 - 1];
    if ("question" === a2) return "Ready. Play or step to start the search.";
    if ("answer" === a2)
      return e2.answer ? `Answer found with a score of ${e2.answer.score.toFixed(2)}: ${e2.answer.text}` : "There are no thoughts to search.";
    if (!n2) return "";
    let s2 = [...n2.candidates].sort((e3, t3) => t3.score - e3.score)[0];
    return "propose" === a2 ? `Depth ${r2}: proposed ${E(n2.candidates.length, "thought")}.` : "score" === a2 ? `Depth ${r2}: scored ${E(n2.candidates.length, "thought")}. Best is ${s2.label}, ${s2.score.toFixed(2)}.` : `Depth ${r2}: kept ${n2.kept.length} of ${n2.candidates.length}, pruned ${n2.candidates.length - n2.kept.length}.`;
  }
  function z({ status: e2, reduced: t2 }) {
    return (0, r.jsx)("span", {
      className: N().status,
      children: (0, r.jsx)(s.N, {
        initial: false,
        mode: "popLayout",
        children: (0, r.jsxs)(
          i.PY1.span,
          {
            className: N().statusItem,
            initial: t2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: { opacity: 1, y: 0 },
            exit: {
              opacity: 0,
              transition: { duration: 0.1 * !t2, ease: [...x.T.ease.standard] }
            },
            transition: {
              duration: t2 ? 0 : x.T.duration.fast,
              ease: [...x.T.ease.standard]
            },
            children: [
              "done" === e2.icon && (0, r.jsx)(o.A, {
                className: N().statusDone,
                size: 14,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }),
              "paused" === e2.icon && (0, r.jsx)(d.A, {
                className: N().statusIcon,
                size: 12,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }),
              (0, r.jsx)("span", {
                className: N().statusText,
                "data-active": !!e2.active && !t2 || void 0,
                children: e2.text
              })
            ]
          },
          e2.key
        )
      })
    });
  }
  function W({
    question: e2 = g,
    questionDetail: t2,
    thoughts: a2 = y,
    beamWidth: s2,
    defaultBeamWidth: i2 = 2,
    onBeamWidthChange: x2,
    seed: $2 = 7,
    autoPlay: M2 = true,
    loop: q2 = false,
    speed: D2 = 1,
    controls: B2 = true,
    model: O2 = A,
    title: Y = "Tree of thoughts",
    accent: V,
    onAnswer: Q,
    className: H,
    style: K
  }) {
    let U = (0, n.useSyncExternalStore)(
      C,
      () => true,
      () => false
    ), Z = (0, l.I)(), J = U && !!Z, G = t2 ?? (e2 === g ? "Which release plan gets v2.4 out by Friday, October 23, without putting the billing migration at risk?" : e2), X = (0, n.useMemo)(() => {
      let t3, r2, n2, s3, i3;
      return t3 = 0, r2 = /* @__PURE__ */ new Set(), n2 = [], s3 = {
        id: "root",
        label: e2,
        text: G,
        score: 1,
        depth: 0,
        order: t3++,
        parent: null,
        children: []
      }, r2.add(s3.id), n2.push(s3), (i3 = (e3, a3, s4) => {
        a3.depth >= 3 || e3.forEach((e4, l2) => {
          var o2;
          let d2, h2 = `${s4}${l2}`, c2 = e4.id ?? `t${h2}`;
          for (; r2.has(c2); ) c2 = `${c2}-${h2}`;
          r2.add(c2);
          let u2 = {
            id: c2,
            label: e4.label,
            text: e4.text ?? e4.label,
            score: Math.round(
              100 * Math.min(
                0.99,
                Math.max(
                  0,
                  e4.score ?? (o2 = `${h2}:${e4.label}`, d2 = Math.imul(
                    (d2 = (function(e5) {
                      let t4 = 2166136261;
                      for (let a4 = 0; a4 < e5.length; a4++)
                        t4 ^= e5.charCodeAt(a4), t4 = Math.imul(t4, 16777619);
                      return t4 >>> 0;
                    })(`${$2}:${o2}`) + 1831565813 >>> 0) ^ d2 >>> 15,
                    1 | d2
                  ), Math.round(
                    (0.18 + 0.76 * ((((d2 ^= d2 + Math.imul(d2 ^ d2 >>> 7, 61 | d2)) ^ d2 >>> 14) >>> 0) / 4294967296)) * 100
                  ) / 100)
                )
              )
            ) / 100,
            depth: a3.depth + 1,
            order: t3++,
            parent: a3,
            children: []
          };
          a3.children.push(u2), n2.push(u2), e4.children?.length && i3(e4.children, u2, `${h2}.`);
        });
      })(a2, s3, ""), { root: s3, all: n2 };
    }, [e2, G, a2, $2]), ee = (0, n.useMemo)(
      () => L.map(
        (e3) => (function(e4, t3) {
          let a3 = [], r2 = [e4];
          for (let e5 = 1; e5 <= 3; e5++) {
            let n3 = r2.flatMap((e6) => e6.children).sort(w);
            if (!n3.length) break;
            let s4 = n3.some((e6) => e6.children.length > 0), i3 = 3 === e5 || !s4, l2 = [...n3].sort(_).slice(0, i3 ? 1 : t3).sort(w);
            if (a3.push({ depth: e5, candidates: n3, kept: l2 }), r2 = l2, i3)
              break;
          }
          let n2 = a3.length ? a3[a3.length - 1].kept[0] ?? null : null, s3 = [];
          for (let e5 = n2; e5; e5 = e5.parent) s3.unshift(e5);
          return {
            beam: t3,
            levels: a3,
            answer: n2,
            path: s3,
            finalStep: 3 * a3.length,
            candidateIds: new Set(
              a3.flatMap((e5) => e5.candidates.map((e6) => e6.id))
            ),
            keptIds: new Set(a3.flatMap((e5) => e5.kept.map((e6) => e6.id))),
            pathIds: new Set(s3.map((e5) => e5.id))
          };
        })(X.root, e3)
      ),
      [X]
    ), et = (0, n.useMemo)(
      () => Math.max(
        3,
        ...ee.flatMap((e3) => e3.levels.map((e4) => e4.candidates.length))
      ),
      [ee]
    ), [ea, er] = (0, n.useState)(() => R(i2)), en = R(s2 ?? ea), es = ee[en - 1], ei = es.levels.length, [el, eo] = (0, n.useState)({ beam: en, step: 0, touched: false }), ed = el.beam === en, eh = ed && el.touched, ec = Math.min(es.finalStep, J && !eh ? es.finalStep : ed ? el.step : 0), [eu, ep] = (0, n.useState)(false), ef = Math.max(0, D2), em = ec >= es.finalStep, ex = eu && ef > 0 && !(J && !eh) && (!em || q2), eg = em && !!es.answer, ey = (0, n.useMemo)(
      () => new Map(
        X.all.map((e3) => [
          e3.id,
          (function(e4, t3, a3) {
            let r2 = a3 >= e4.finalStep && !!e4.answer;
            if (0 === t3.depth)
              return { status: "root", shown: true, scored: false, onPath: r2 };
            if (!e4.candidateIds.has(t3.id) || a3 < 3 * (t3.depth - 1) + 1)
              return {
                status: "hidden",
                shown: false,
                scored: false,
                onPath: false
              };
            let n2 = a3 >= 3 * (t3.depth - 1) + 2, s3 = a3 >= 3 * t3.depth, i3 = e4.keptIds.has(t3.id), l2 = r2 && e4.pathIds.has(t3.id);
            return {
              status: s3 ? i3 ? r2 && t3 === e4.answer ? "answer" : "kept" : "pruned" : "candidate",
              shown: true,
              scored: n2,
              onPath: l2
            };
          })(es, e3, ec)
        ])
      ),
      [X, es, ec]
    ), e_ = (e3) => ey.get(e3.id) ?? { status: "hidden", shown: false, scored: false, onPath: false };
    (0, n.useEffect)(() => {
      if (!eu || 0 === ef || J && !eh) return;
      if (ec >= es.finalStep) {
        if (!q2) return;
        let e4 = window.setTimeout(
          () => eo({ beam: en, step: 0, touched: true }),
          T.answer / ef
        );
        return () => window.clearTimeout(e4);
      }
      let e3 = window.setTimeout(
        () => eo({ beam: en, step: ec + 1, touched: true }),
        T[b(es, ec).phase] / ef
      );
      return () => window.clearTimeout(e3);
    }, [eu, ef, J, eh, ec, es, en, q2]);
    let ew = (0, n.useRef)(null), eb = (0, n.useRef)({ autoPlay: M2, reduced: J, started: false });
    (0, n.useEffect)(() => {
      eb.current.autoPlay = M2, eb.current.reduced = J;
    }, [M2, J]), (0, n.useEffect)(() => {
      let e3 = ew.current;
      if (!e3 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(
        ([e4]) => {
          let a3 = eb.current;
          e4?.isIntersecting && !a3.started && (a3.started = true, t3.disconnect(), a3.autoPlay && !a3.reduced && ep(true));
        },
        { threshold: 0.3 }
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let ev = (0, n.useRef)(null);
    (0, n.useEffect)(() => {
      if (!eg || !es.answer) {
        ev.current = null;
        return;
      }
      let e3 = `${en}:${es.answer.id}`;
      ev.current !== e3 && (ev.current = e3, Q?.({
        answer: P(es.answer),
        path: es.path.slice(1).map(P),
        beamWidth: en
      }));
    }, [eg, es, en, Q]);
    let [ek, e$] = (0, n.useState)({ text: "", beam: 0, step: -1 }), ej = ex ? "" : ek.beam === en && ek.step === ec ? ek.text : eg ? I(es, ec) : "", eS = (0, n.useRef)(null), [eM, eN] = (0, n.useState)(0);
    (0, n.useLayoutEffect)(() => {
      let e3 = eS.current;
      if (!e3) return;
      let t3 = () => eN(Math.floor(e3.clientWidth));
      t3();
      let a3 = new ResizeObserver(t3);
      return a3.observe(e3), () => a3.disconnect();
    }, []);
    let eA = eM >= 620 ? "wide" : "narrow", eT = (0, n.useMemo)(
      () => eM ? "wide" === eA ? (function(e3, t3, a3, r2, n2) {
        let s3 = Math.max(1, a3.levels.length), i3 = v(0.045 * r2, 24, 40), l2 = v(0.19 * r2, 112, 148), o2 = Math.min(240, (r2 - l2 - s3 * i3) / s3), d2 = [{ x: 0, w: l2, depth: 0 }];
        for (let e4 = 1; e4 <= s3; e4++)
          d2.push({ x: l2 + i3 + (e4 - 1) * (o2 + i3), w: o2, depth: e4 });
        let h2 = a3.levels.map((e4) => e4.candidates), c2 = (e4) => h2[e4.depth] ? e4.children.filter((e5) => a3.candidateIds.has(e5.id)) : [], u2 = /* @__PURE__ */ new Map();
        u2.set(e3.id, (n2 - 1) / 2);
        let p2 = (t4) => {
          let a4 = t4.parent ?? e3, r3 = c2(a4);
          return (u2.get(a4.id) ?? 0) + r3.indexOf(t4) - (r3.length - 1) / 2;
        }, f2 = (e4, t4) => (function(e5, t5) {
          let a4 = Math.max(t5, 0 + e5.length - 1), r3 = [], n3 = (e6) => (e6.start = v(e6.sum / e6.n, 0, a4 - e6.n + 1), e6);
          for (let t6 of e5) {
            let e6 = n3({ n: 1, sum: t6, start: 0 });
            for (; r3.length; ) {
              let t7 = r3[r3.length - 1];
              if (t7.start + t7.n <= e6.start + 1e-6) break;
              r3.pop(), e6 = n3({
                n: t7.n + e6.n,
                sum: t7.sum + e6.sum - e6.n * t7.n,
                start: 0
              });
            }
            r3.push(e6);
          }
          return r3.flatMap(
            (e6) => Array.from({ length: e6.n }, (t6, a5) => e6.start + a5)
          );
        })(t4, n2 - 1).forEach((t5, a4) => u2.set(e4[a4].id, t5));
        h2.forEach((e4) => f2(e4, e4.map(p2)));
        for (let t4 = 0; t4 < 3; t4++) {
          for (let e4 = h2.length - 2; e4 >= 0; e4--) {
            let t5 = h2[e4];
            f2(
              t5,
              t5.map((e5) => {
                let t6 = c2(e5);
                return t6.length ? k(t6.map((e6) => u2.get(e6.id) ?? 0)) : u2.get(e5.id) ?? 0;
              })
            );
          }
          h2[0]?.length && u2.set(
            e3.id,
            v(k(h2[0].map((e4) => u2.get(e4.id) ?? 0)), 0, n2 - 1)
          ), h2.forEach(
            (e4) => f2(
              e4,
              e4.map(
                (e5) => c2(e5).length ? u2.get(e5.id) ?? 0 : p2(e5)
              )
            )
          );
        }
        let m2 = 62, x3 = 62 * n2 - 8, g2 = /* @__PURE__ */ new Map(), y2 = u2.get(e3.id) ?? 0, _2 = v(30 + y2 * m2 + 27 - 42, 30, 30 + x3 - 84);
        for (let a4 of (g2.set(e3.id, { x: 0, y: _2, w: l2, h: 84 }), t3)) {
          if (0 === a4.depth) continue;
          let e4 = d2[Math.min(a4.depth, d2.length - 1)], t4 = u2.get(a4.id) ?? (a4.parent ? u2.get(a4.parent.id) : void 0) ?? y2;
          g2.set(a4.id, { x: e4.x, y: 30 + t4 * m2, w: e4.w, h: 54 });
        }
        return {
          mode: "wide",
          width: r2,
          height: 30 + x3,
          boxes: g2,
          columns: d2
        };
      })(X.root, X.all, es, eM, et) : (function(e3, t3, a3, r2, n2) {
        let s3 = /* @__PURE__ */ new Map(), i3 = (t4, a4) => {
          let r3 = 0, i4 = (e4) => {
            if (e4.depth > 0 && !t4(e4)) return;
            let l3 = 0 === e4.depth ? 62 : 44, o2 = 16 * e4.depth;
            a4 && s3.set(e4.id, {
              x: o2,
              y: r3,
              w: Math.max(120, n2 - o2),
              h: l3
            }), r3 += l3 + 6, e4.children.forEach(i4);
          };
          return i4(e3), Math.max(0, r3 - 6);
        }, l2 = i3(r2, false);
        for (let e4 of (i3(a3, true), t3)) {
          if (s3.has(e4.id)) continue;
          let t4 = e4.parent ? s3.get(e4.parent.id) : void 0, a4 = 16 * e4.depth;
          s3.set(e4.id, {
            x: a4,
            y: t4 ? t4.y + t4.h + 6 : 0,
            w: Math.max(120, n2 - a4),
            h: 44
          });
        }
        return {
          mode: "narrow",
          width: n2,
          height: l2,
          boxes: s3,
          columns: []
        };
      })(
        X.root,
        X.all,
        (e3) => 0 === e3.depth || (ey.get(e3.id)?.shown ?? false),
        (e3) => es.candidateIds.has(e3.id),
        eM
      ) : null,
      [eM, eA, X, es, et, ey]
    ), eL = (0, n.useRef)(/* @__PURE__ */ new Map()), eR = (0, n.useRef)(/* @__PURE__ */ new Map()), eC = (0, n.useRef)(null), eE = (0, n.useRef)(null), eP = (0, n.useRef)({
      pos: /* @__PURE__ */ new Map(),
      shown: /* @__PURE__ */ new Set(),
      mode: "",
      width: 0,
      frame: 0,
      last: 0
    }), eF = (0, n.useRef)({ layout: null, paint: () => {
    } }), eI = (0, n.useRef)(() => {
    }), ez = (0, n.useCallback)(() => {
      if (!eT) return;
      let { pos: e3 } = eP.current, t3 = (t4) => {
        let a4 = eT.boxes.get(t4), r2 = e3.get(t4);
        return a4 && r2 ? { x: r2.x, y: r2.y, w: a4.w, h: a4.h } : a4;
      };
      for (let e4 of X.all) {
        let a4 = t3(e4.id), r2 = eL.current.get(e4.id);
        if (r2 && a4 && (r2.style.transform = `translate3d(${a4.x}px, ${a4.y}px, 0)`), !e4.parent)
          continue;
        let n2 = t3(e4.parent.id), s3 = eR.current.get(e4.id);
        s3 && a4 && n2 && s3.setAttribute("d", j(eT.mode, n2, a4));
      }
      let a3 = S(
        eT.mode,
        es.path.map((e4) => t3(e4.id)).filter((e4) => !!e4)
      );
      eC.current?.setAttribute("d", a3), eE.current?.setAttribute("d", a3);
    }, [eT, X, es]);
    (0, n.useLayoutEffect)(() => {
      eF.current = { layout: eT, paint: ez }, eI.current = (e3) => {
        let t3 = eP.current, a3 = eF.current.layout, r2 = Math.min(0.05, Math.max(0, (e3 - t3.last) / 1e3));
        t3.last = e3;
        let n2 = false;
        if (a3)
          for (let [e4, s3] of t3.pos) {
            let i3 = a3.boxes.get(e4);
            if (i3 && t3.shown.has(e4)) {
              for (let e5 = r2; e5 > 0; e5 -= 1 / 240) {
                let t4 = Math.min(e5, 1 / 240);
                s3.vx += (-225 * (s3.x - i3.x) - 30 * s3.vx) * t4, s3.vy += (-225 * (s3.y - i3.y) - 30 * s3.vy) * t4, s3.x += s3.vx * t4, s3.y += s3.vy * t4;
              }
              0.05 > Math.abs(s3.x - i3.x) && 0.05 > Math.abs(s3.y - i3.y) && 0.5 > Math.abs(s3.vx) && 0.5 > Math.abs(s3.vy) ? (s3.x = i3.x, s3.y = i3.y, s3.vx = 0, s3.vy = 0) : n2 = true;
            }
          }
        eF.current.paint(), t3.frame = n2 ? requestAnimationFrame((e4) => eI.current(e4)) : 0;
      };
    }), (0, n.useLayoutEffect)(() => {
      if (!eT) return;
      let e3 = eP.current, t3 = J || e3.mode !== eT.mode || e3.width !== eT.width, a3 = false;
      for (let r2 of X.all) {
        let n2 = eT.boxes.get(r2.id);
        if (!n2) continue;
        let s3 = 0 === r2.depth || (ey.get(r2.id)?.shown ?? false), i3 = e3.pos.get(r2.id);
        if (!i3) {
          e3.pos.set(r2.id, { x: n2.x, y: n2.y, vx: 0, vy: 0 });
          continue;
        }
        if (t3 || s3 && !e3.shown.has(r2.id)) {
          i3.x = n2.x, i3.y = n2.y, i3.vx = 0, i3.vy = 0;
          continue;
        }
        s3 && (Math.abs(i3.x - n2.x) > 0.01 || Math.abs(i3.y - n2.y) > 0.01) && (a3 = true);
      }
      e3.mode = eT.mode, e3.width = eT.width, e3.shown = new Set(
        X.all.filter((e4) => 0 === e4.depth || ey.get(e4.id)?.shown).map((e4) => e4.id)
      ), ez(), a3 && !e3.frame && (e3.last = performance.now(), e3.frame = requestAnimationFrame((e4) => eI.current(e4)));
    }, [eT, ey, X, J, ez]), (0, n.useEffect)(() => {
      let e3 = eP.current;
      return () => {
        cancelAnimationFrame(e3.frame), e3.frame = 0;
      };
    }, []);
    let [eW, eq] = (0, n.useState)("root"), [eD, eB] = (0, n.useState)(null), [eO, eY] = (0, n.useState)(null), eV = e_(X.all.find((e3) => e3.id === eW) ?? X.root).shown || "root" === eW ? eW : "root", eQ = eD ?? eO, eH = (function(e3, t3, a3) {
      let { phase: r2, depth: n2 } = b(e3, t3), s3 = e3.levels[n2 - 1], i3 = s3?.candidates.length ?? 0, l2 = s3?.kept.length ?? 0, o2 = a3 ? null : "paused";
      return "answer" === r2 ? {
        key: "answer",
        text: e3.answer ? "Answer found" : "Nothing to search",
        icon: "done",
        active: false
      } : "question" === r2 ? a3 ? {
        key: "q",
        text: "Reading the question",
        icon: null,
        active: true
      } : { key: "ready", text: "Ready", icon: null, active: false } : "propose" === r2 ? {
        key: `${t3}-${a3}`,
        text: `${a3 ? "Proposing" : "Proposed"} ${E(i3, "thought")}`,
        icon: o2,
        active: a3
      } : "score" === r2 ? {
        key: `${t3}-${a3}`,
        text: `${a3 ? "Scoring" : "Scored"} ${E(i3, "thought")}`,
        icon: o2,
        active: a3
      } : {
        key: `${t3}-${a3}`,
        text: `${a3 ? "Keeping" : "Kept"} the best ${1 === l2 ? "one" : l2}`,
        icon: o2,
        active: a3
      };
    })(es, ec, ex), { phase: eK, depth: eU } = b(es, ec), eZ = new Map(es.path.map((e3, t3) => [e3.id, t3])), eJ = {
      ...K,
      ...V ? { "--rt-accent": V } : null,
      "--rt-path-steps": Math.max(1, es.path.length - 1)
    }, eG = (e3) => e3.parent ? e3.parent.children.filter((e4) => es.candidateIds.has(e4.id)).indexOf(e3) : 0;
    return (0, r.jsx)("div", {
      ref: ew,
      className: [N().root, H].filter(Boolean).join(" "),
      style: eJ,
      "data-mode": eT?.mode,
      "data-ready": !!eT || void 0,
      "data-final": !!eg || void 0,
      children: (0, r.jsxs)("div", {
        className: N().card,
        children: [
          (0, r.jsxs)("div", {
            className: N().header,
            children: [
              (0, r.jsx)("div", {
                className: N().title,
                children: O2 ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    O2.mark && (0, r.jsx)("span", {
                      className: N().mark,
                      "aria-hidden": "true",
                      children: O2.mark
                    }),
                    (0, r.jsx)("span", {
                      className: N().modelName,
                      children: O2.name
                    }),
                    (0, r.jsx)("span", {
                      className: N().method,
                      children: Y
                    })
                  ]
                }) : (0, r.jsx)("span", {
                  className: N().modelName,
                  children: Y
                })
              }),
              (0, r.jsx)(z, { status: eH, reduced: J })
            ]
          }),
          (0, r.jsx)("div", {
            ref: eS,
            className: N().stage,
            style: eT ? { height: eT.height } : void 0,
            children: eT && (0, r.jsxs)(r.Fragment, {
              children: [
                "wide" === eT.mode && eT.columns.map((e3) => {
                  let t3 = es.levels[e3.depth - 1], a3 = e3.depth > 0 && ec >= 3 * e3.depth, n2 = t3 ? e3.depth === ei ? `Best of ${t3.candidates.length}` : `${t3.kept.length} of ${t3.candidates.length} kept` : "";
                  return (0, r.jsxs)(
                    "div",
                    {
                      className: N().column,
                      style: { left: e3.x, width: e3.w },
                      "data-active": ("question" === eK ? 0 : eU) === e3.depth && !eg || void 0,
                      "aria-hidden": "true",
                      children: [
                        (0, r.jsx)("span", {
                          className: N().columnName,
                          children: 0 === e3.depth ? "Question" : `Depth ${e3.depth}`
                        }),
                        e3.depth > 0 && (0, r.jsx)("span", {
                          className: N().columnCount,
                          "data-on": !!a3 || void 0,
                          children: n2
                        })
                      ]
                    },
                    e3.depth
                  );
                }),
                (0, r.jsxs)("svg", {
                  className: N().edges,
                  width: eT.width,
                  height: eT.height,
                  "aria-hidden": "true",
                  children: [
                    X.all.map((e3) => {
                      if (!e3.parent) return null;
                      let t3 = e_(e3), a3 = eT.boxes.get(e3.parent.id), n2 = eT.boxes.get(e3.id);
                      return a3 && n2 ? (0, r.jsx)(
                        "path",
                        {
                          ref: (t4) => {
                            t4 ? eR.current.set(e3.id, t4) : eR.current.delete(e3.id);
                          },
                          className: N().edge,
                          d: j(eT.mode, a3, n2),
                          pathLength: 1,
                          "data-on": !!t3.shown && "pruned" !== t3.status || void 0,
                          style: { "--i": eG(e3) }
                        },
                        e3.id
                      ) : null;
                    }),
                    (0, r.jsx)("path", {
                      ref: eC,
                      className: N().pathLine,
                      pathLength: 1,
                      d: S(
                        eT.mode,
                        es.path.map((e3) => eT.boxes.get(e3.id)).filter((e3) => !!e3)
                      )
                    }),
                    (0, r.jsx)("path", {
                      ref: eE,
                      className: N().sheen,
                      pathLength: 1,
                      d: S(
                        eT.mode,
                        es.path.map((e3) => eT.boxes.get(e3.id)).filter((e3) => !!e3)
                      )
                    })
                  ]
                }),
                (0, r.jsx)("div", {
                  className: N().tree,
                  role: "tree",
                  "aria-label": `Thought tree for: ${X.root.text}`,
                  onKeyDown: (e3) => {
                    let t3;
                    if (!eT) return;
                    let a3 = X.all.find((e4) => e4.id === eV) ?? X.root, r2 = X.all.filter((e4) => 0 === e4.depth || e_(e4).shown), n2 = (e4) => eT.boxes.get(e4.id)?.y ?? 0, s3 = ("wide" === eT.mode ? r2.filter((e4) => e4.depth === a3.depth) : r2).sort((e4, t4) => n2(e4) - n2(t4) || e4.order - t4.order), i3 = s3.indexOf(a3);
                    if ("ArrowDown" === e3.key) t3 = s3[i3 + 1];
                    else if ("ArrowUp" === e3.key) t3 = s3[i3 - 1];
                    else if ("ArrowRight" === e3.key) {
                      let e4 = a3.children.filter((e5) => e_(e5).shown);
                      t3 = e4.find((e5) => e_(e5).onPath) ?? e4.find((e5) => "pruned" !== e_(e5).status) ?? e4[0];
                    } else
                      "ArrowLeft" === e3.key ? t3 = a3.parent ?? void 0 : "Home" === e3.key ? t3 = X.root : "End" === e3.key && (t3 = eg && es.answer || [...r2].sort(
                        (e4, t4) => t4.depth - e4.depth || n2(e4) - n2(t4)
                      )[0]);
                    t3 && (t3 !== a3 || "Home" === e3.key) && (e3.preventDefault(), eq(t3.id), eL.current.get(t3.id)?.focus({ preventScroll: false }));
                  },
                  children: X.all.map((e3) => {
                    let t3 = e_(e3), a3 = eT.boxes.get(e3.id);
                    if (!a3) return null;
                    let n2 = e3.parent ? e3.parent.children.filter((e4) => e_(e4).shown) : [e3], s3 = eQ === e3.id && t3.shown, i3 = a3.y < 96 ? "bottom" : "top", l2 = "narrow" === eT.mode || 0 === e3.depth ? "start" : e3.depth === ei ? "end" : "center";
                    return (0, r.jsxs)(
                      "div",
                      {
                        ref: (t4) => {
                          t4 ? eL.current.set(e3.id, t4) : eL.current.delete(e3.id);
                        },
                        role: "treeitem",
                        "aria-level": e3.depth + 1,
                        "aria-setsize": n2.length,
                        "aria-posinset": Math.max(1, n2.indexOf(e3) + 1),
                        "aria-selected": t3.shown && eV === e3.id,
                        "aria-label": 0 === e3.depth ? `Question: ${e3.text}` : `${e3.text} ${F(e3, t3)}.`,
                        "aria-hidden": !t3.shown || void 0,
                        tabIndex: t3.shown && eV === e3.id ? 0 : -1,
                        className: N().slot,
                        "data-depth": e3.depth,
                        "data-last": e3.depth > 0 && e3.depth === ei || void 0,
                        "data-shown": t3.shown,
                        "data-status": t3.status,
                        "data-scored": !!t3.scored || void 0,
                        "data-path": !!t3.onPath || void 0,
                        "data-active": !!s3 || void 0,
                        style: {
                          width: a3.w,
                          height: a3.h,
                          transform: `translate3d(${a3.x}px, ${a3.y}px, 0)`,
                          "--i": eG(e3),
                          "--s": e3.score,
                          "--n": Math.round(100 * e3.score),
                          "--p": eZ.get(e3.id) ?? 0
                        },
                        onPointerEnter: (t4) => {
                          "mouse" === t4.pointerType && eB(e3.id);
                        },
                        onPointerLeave: () => eB((t4) => t4 === e3.id ? null : t4),
                        onFocus: () => {
                          eq(e3.id), eY(e3.id);
                        },
                        onBlur: () => eY((t4) => t4 === e3.id ? null : t4),
                        children: [
                          (0, r.jsx)("div", {
                            className: N().node,
                            children: 0 === e3.depth ? (0, r.jsx)("span", {
                              className: N().question,
                              children: e3.label
                            }) : (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsxs)("span", {
                                  className: N().labelRow,
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: N().label,
                                      children: e3.label
                                    }),
                                    e3.depth === ei && (0, r.jsx)(o.A, {
                                      className: N().check,
                                      size: 14,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true"
                                    })
                                  ]
                                }),
                                (0, r.jsxs)("span", {
                                  className: N().score,
                                  "aria-hidden": "true",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: N().track,
                                      children: (0, r.jsx)("span", {
                                        className: N().fill
                                      })
                                    }),
                                    (0, r.jsx)("span", {
                                      className: N().num
                                    })
                                  ]
                                })
                              ]
                            })
                          }),
                          s3 && (0, r.jsxs)("span", {
                            className: N().tag,
                            "data-side": i3,
                            "data-align": l2,
                            "aria-hidden": "true",
                            children: [
                              (0, r.jsx)("span", {
                                className: N().tagText,
                                children: e3.text
                              }),
                              (0, r.jsx)("span", {
                                className: N().tagMeta,
                                children: F(e3, t3)
                              })
                            ]
                          })
                        ]
                      },
                      e3.id
                    );
                  })
                })
              ]
            })
          }),
          B2 && (0, r.jsxs)("div", {
            className: N().footer,
            "data-frame-keep": "",
            children: [
              (0, r.jsxs)("div", {
                className: N().transport,
                role: "group",
                "aria-label": "Playback",
                children: [
                  (0, r.jsx)(m.m, {
                    content: ex ? "Pause" : em ? "Replay" : "Play",
                    children: (0, r.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      className: N().iconButton,
                      "aria-label": ex ? "Pause" : em ? "Replay" : "Play",
                      onClick: () => {
                        if (ex) {
                          ep(false), e$({ text: I(es, ec), beam: en, step: ec });
                          return;
                        }
                        (em || !eh) && eo({ beam: en, step: em ? 0 : ec, touched: true }), ep(true);
                      },
                      children: (0, r.jsxs)("span", {
                        className: N().playIcon,
                        "data-playing": !!ex || void 0,
                        children: [
                          (0, r.jsx)(h.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          (0, r.jsx)(d.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          })
                        ]
                      })
                    })
                  }),
                  (0, r.jsx)(m.m, {
                    content: "Step",
                    children: (0, r.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      className: N().iconButton,
                      "aria-label": "Step",
                      "aria-disabled": em || void 0,
                      onClick: () => {
                        em || (ep(false), eo({ beam: en, step: ec + 1, touched: true }), e$({
                          text: I(es, ec + 1),
                          beam: en,
                          step: ec + 1
                        }));
                      },
                      children: (0, r.jsx)(c.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    })
                  }),
                  (0, r.jsx)(m.m, {
                    content: "Restart",
                    children: (0, r.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      className: N().iconButton,
                      "aria-label": "Restart",
                      onClick: () => {
                        eo({ beam: en, step: 0, touched: true }), ep(!J && ef > 0), e$({ text: I(es, 0), beam: en, step: 0 });
                      },
                      children: (0, r.jsx)(u.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    })
                  })
                ]
              }),
              (0, r.jsxs)("div", {
                className: N().beam,
                children: [
                  (0, r.jsxs)("span", {
                    className: N().beamLabel,
                    "aria-hidden": "true",
                    children: [
                      (0, r.jsx)("span", {
                        className: N().beamLong,
                        children: "Beam width"
                      }),
                      (0, r.jsx)("span", {
                        className: N().beamShort,
                        children: "Beam"
                      })
                    ]
                  }),
                  (0, r.jsx)(f.A, {
                    label: "Beam width",
                    options: L.map((e3) => ({
                      value: String(e3),
                      label: String(e3)
                    })),
                    value: String(en),
                    onValueChange: (e3) => ((e4) => {
                      let t3 = R(e4);
                      if (t3 === en) return;
                      x2?.(t3), void 0 === s2 && er(t3), eo({ beam: t3, step: 0, touched: !J }), ep(!J && ef > 0);
                      let a3 = ee[t3 - 1];
                      J && e$({
                        text: `Beam width ${t3}. ${I(a3, a3.finalStep)}`,
                        beam: t3,
                        step: a3.finalStep
                      });
                    })(Number(e3))
                  })
                ]
              })
            ]
          }),
          (0, r.jsx)("span", {
            className: N().srOnly,
            role: "status",
            "aria-live": "polite",
            children: ej
          })
        ]
      })
    });
  }
  var q = a(44531), D = a.n(q);
  function B() {
    return (0, r.jsx)("div", {
      className: D().demo,
      children: (0, r.jsx)(W, { defaultBeamWidth: 2 })
    });
  }
  let O = B;
}

__m(__module,__exports,__require);
}