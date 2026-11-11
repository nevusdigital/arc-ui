function(__module,__exports,__require){
"use strict";
const __m = (e, t, a) => {
  "use strict";
  a.r(t), a.d(t, { ToneTunerDemo: () => eo, default: () => el });
  var n = a(95155), i = a(12115), r = a(92171), s = a(80642), o = a(25354), l = a(18310), d = a(96915), c = a(49804), u = a(153), h = a(64577), m = a(35484), p = a(58081), g = a(92298), f = a(92218), y = a(73474), w = a(94274), b = a(50680), _ = a(52898), v = a(7770), x = a(67752);
  function j({ title: e2 = "Claude", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  let k = { formality: 1, detail: 1, voice: "neutral" }, N = [
    { voice: "friendly", label: "Friendly", formality: 0, detail: 1 },
    { voice: "confident", label: "Confident", formality: 1, detail: 0 },
    { voice: "empathetic", label: "Empathetic", formality: 1, detail: 2 }
  ], C = ["Casual", "Neutral", "Formal"], T = ["Concise", "Balanced", "Detailed"], A = ["Hi Sofia,", "Hello Sofia,", "Dear Ms. Ramirez,"], R = {
    neutral: [
      "Thanks for flagging the double charge on your October invoice.",
      "Thank you for reporting the duplicate charge on your October invoice.",
      "Thank you for bringing the duplicate charge on invoice INV-20481 to our attention."
    ],
    friendly: [
      "Thanks so much for the heads up about the double charge, and sorry for the hassle!",
      "Thanks for letting us know about the double charge, and sorry for the hassle.",
      "Thank you kindly for letting us know about the duplicate charge on invoice INV-20481."
    ],
    confident: [
      "Good catch on the double charge. It's already sorted.",
      "You were right about the duplicate charge, and it is already resolved.",
      "We have confirmed the duplicate charge on invoice INV-20481 and resolved it in full."
    ],
    empathetic: [
      "I'm really sorry you got charged twice. That's stressful, especially at month end.",
      "I'm sorry you were charged twice. I know how disruptive that is at month end.",
      "Please accept our apologies for the duplicate charge. We understand how disruptive this is at month end."
    ]
  }, E = [
    "We've refunded the extra $1,240",
    "We have refunded the extra $1,240.00",
    "A full refund of $1,240.00 has been issued to your card ending 4417"
  ], S = [
    ", so it should land on your card in 5 to 10 business days",
    ", and it should reach your card within 5 to 10 business days",
    " and should appear on your statement within 5 to 10 business days"
  ], $ = [
    "A payment retry fired twice after a timeout, and we've added a check so it can't happen again.",
    "A payment retry ran twice after a timeout, and we have added a safeguard so it cannot happen again.",
    "The cause was a payment retry that ran twice following a timeout; we have since added a safeguard to prevent any recurrence."
  ], z = {
    neutral: [
      "Let me know if anything else looks off.",
      "Let me know if anything else looks wrong.",
      "Please let us know if you notice any further discrepancies."
    ],
    friendly: [
      "Shout if anything else looks off, happy to help!",
      "Just reply here if anything else looks off. Happy to help.",
      "Please do reply if anything else looks amiss; we are always happy to help."
    ],
    confident: [
      "You're all set.",
      "No action is needed on your side.",
      "No further action is required on your part."
    ],
    empathetic: [
      "If it caused any trouble on your end, tell me and I'll make it right.",
      "If this caused any trouble on your end, reply here and I will make it right.",
      "Should this have caused any difficulty on your side, please reply and we will make it right."
    ]
  }, L = ["Cheers,", "Best,", "Kind regards,"], I = ["Jordan", "Jordan", "Jordan Reyes, Billing support"];
  function O({ formality: e2, detail: t2, voice: a2 }) {
    return [
      { segments: [A[e2]] },
      {
        segments: [R[a2][e2], `${E[e2]}${t2 > 0 ? S[e2] : ""}.`, t2 > 1 ? $[e2] : ""]
      },
      { segments: [z[a2][e2]] },
      { segments: [L[e2], I[e2]], lines: true }
    ];
  }
  let B = [0, 1, 2], M = ["neutral", "friendly", "confident", "empathetic"], W = B.map(
    (e2) => B.map(
      (t2) => M.map((a2) => O({ formality: e2, detail: t2, voice: a2 })).reduce(
        (e3, t3) => P(t3).length > P(e3).length ? t3 : e3
      )
    )
  );
  function P(e2) {
    return e2.map((e3) => e3.segments.filter(Boolean).join(e3.lines ? "\n" : " ")).filter(Boolean).join("\n\n");
  }
  function D(e2) {
    return e2.trim().split(/\n\s*\n/).map((e3) => e3.trim()).filter(Boolean).map(
      (e3) => e3.includes("\n") ? {
        segments: e3.split("\n").map((e4) => e4.trim()).filter(Boolean),
        lines: true
      } : {
        segments: (e3.match(/[^.!?]+(?:[.!?]+["')\]]*|$)/g) ?? [e3]).map((e4) => e4.trim()).filter(Boolean)
      }
    );
  }
  let F = (e2, t2) => e2.formality === t2.formality && e2.detail === t2.detail && e2.voice === t2.voice;
  function H(e2) {
    let t2 = "neutral" === e2.voice ? "neutral voice" : `${e2.voice} voice`;
    return `${t2}, ${C[e2.formality].toLowerCase()}, ${T[e2.detail].toLowerCase()}`;
  }
  let V = (e2) => e2.split(/\s+/).filter(Boolean), Y = (e2) => e2.toLowerCase().replace(/[^\p{L}\p{N}$]/gu, "");
  var J = a(95458), K = a.n(J);
  let X = (...e2) => e2.filter(Boolean).join(" "), Z = [...v.T.ease.enter], G = [...v.T.ease.standard], U = [
    { voice: "friendly", formality: 0, detail: 1 },
    { voice: "confident", formality: 1, detail: 0 },
    { voice: "empathetic", formality: 1, detail: 2 },
    { voice: "empathetic", formality: 2, detail: 2 },
    k
  ], q = { friendly: d.A, confident: c.A, empathetic: u.A }, Q = {
    name: "Sofia Ramirez",
    avatar: (0, x.my)("sofia-ramirez"),
    subject: "Re: Duplicate charge on INV-20481"
  };
  function ee({ seg: e2, lead: t2, block: a2, reduced: s2 }) {
    var o2, l2;
    let d2, c2 = (0, i.useRef)(null), [u2, h2] = (0, i.useState)(e2), m2 = (0, i.useRef)(e2), p2 = (0, i.useRef)(void 0), g2 = (0, i.useRef)(null);
    e2.text === u2.text && e2 !== u2 && h2(e2), (0, i.useEffect)(() => {
      m2.current = e2;
    }), (0, i.useEffect)(() => {
      let t3 = c2.current;
      if (!t3 || s2) return;
      if (e2.text === u2.text) {
        "out" === g2.current && (p2.current?.stop(), g2.current = null, p2.current = (0, r.i)(
          t3,
          { opacity: 1 },
          { duration: 0.16, ease: Z }
        ));
        return;
      }
      let a3 = false;
      p2.current?.stop(), g2.current = "out";
      let n2 = (0, r.i)(t3, { opacity: 0 }, { duration: 0.1, ease: G });
      return p2.current = n2, n2.then(() => {
        a3 || "out" !== g2.current || (g2.current = "in", h2(m2.current));
      }), () => {
        a3 = true;
      };
    }, [e2.text, u2.text, s2]), (0, i.useLayoutEffect)(() => {
      let e3 = c2.current;
      "in" === g2.current && e3 && (g2.current = null, p2.current?.stop(), p2.current = (0, r.i)(
        e3,
        { opacity: [0, 1] },
        { duration: 0.16, ease: Z }
      ));
    }, [u2.text]), (0, i.useEffect)(() => () => p2.current?.stop(), []);
    let f2 = s2 ? e2 : u2;
    return (0, n.jsxs)("span", {
      ref: c2,
      className: X(K().segment, a2 && K().line),
      children: [
        t2 && f2.text ? " " : null,
        (o2 = f2.text, l2 = f2.added, d2 = [], o2.split(/\s+/).filter(Boolean).forEach((e3, t3) => {
          let a3 = l2[t3] ?? false;
          if (t3 > 0) {
            let e4 = d2[d2.length - 1];
            !e4.added || a3 ? e4.text += " " : d2.push({ text: " ", added: false });
          }
          let n2 = d2[d2.length - 1];
          n2 && n2.added === a3 ? n2.text += e3 : d2.push({ text: e3, added: a3 });
        }), d2).map(
          (e3, t3) => e3.added ? (0, n.jsx)("mark", { className: K().ins, children: e3.text }, t3) : (0, n.jsx)("span", { children: e3.text }, t3)
        )
      ]
    });
  }
  function et({ doc: e2, flags: t2, reduced: a2 }) {
    return (0, n.jsx)(n.Fragment, {
      children: e2.map(
        (e3, i2) => (0, n.jsx)(
          "p",
          {
            className: K().paragraph,
            children: e3.segments.map(
              (r2, s2) => t2 ? (0, n.jsx)(
                ea,
                {
                  text: r2,
                  added: t2[i2]?.[s2],
                  lead: !e3.lines && s2 > 0,
                  block: e3.lines,
                  reduced: a2
                },
                s2
              ) : (0, n.jsxs)(
                "span",
                {
                  className: e3.lines ? K().line : void 0,
                  children: [!e3.lines && s2 > 0 && r2 ? " " : null, r2]
                },
                s2
              )
            )
          },
          i2
        )
      )
    });
  }
  function ea({ text: e2, added: t2 = [], lead: a2, block: r2, reduced: s2 }) {
    let o2 = t2.map((e3) => +!!e3).join(""), l2 = (0, i.useMemo)(
      () => ({ text: e2, added: o2.split("").map((e3) => "1" === e3) }),
      [e2, o2]
    );
    return (0, n.jsx)(ee, { seg: l2, lead: a2, block: r2, reduced: s2 });
  }
  function en({ id: e2, children: t2, className: a2, reduced: i2 }) {
    return (0, n.jsx)("span", {
      className: X(K().fadeStack, a2),
      children: (0, n.jsx)(s.N, {
        initial: false,
        children: (0, n.jsx)(
          o.PY1.span,
          {
            className: K().fadeItem,
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { duration: 0.16 * !i2, ease: Z }
            },
            exit: { opacity: 0, transition: { duration: 0.1 * !i2, ease: G } },
            children: t2
          },
          e2
        )
      })
    });
  }
  function ei({
    value: e2,
    defaultValue: t2 = k,
    onValueChange: a2,
    text: s2,
    rewrite: o2,
    onRewrite: d2,
    onCopy: c2,
    recipient: u2 = Q,
    model: x2 = "Claude Sonnet 5.5",
    presets: A2 = N,
    debounceMs: R2 = 220,
    showChanges: E2,
    defaultShowChanges: S2 = true,
    onShowChangesChange: $2,
    autoPlay: z2,
    className: L2
  }) {
    let I2, B2, M2 = (0, l.I)() ?? false, J2 = (0, i.useId)(), Z2 = !!o2, [G2, ee2] = (0, i.useState)(t2), ea2 = e2 ?? G2, { formality: er2, detail: es2, voice: eo2 } = ea2, el2 = `${er2}${es2}${eo2}`, ed = (0, i.useMemo)(() => Z2 ? D(s2 ?? "") : O(k), [Z2, s2]), ec = 0 === ed.length, [eu, eh] = (0, i.useState)(() => Z2 ? ed : O(ea2)), [em, ep] = (0, i.useState)(ea2), [eg, ef] = (0, i.useState)(() => Z2 || F(ea2, k) ? "idle" : "done"), [ey, ew] = (0, i.useState)(""), [eb, e_] = (0, i.useState)(0), [ev, ex] = (0, i.useState)(el2);
    el2 !== ev && (ex(el2), ec || ef("rewriting"));
    let [ej, ek] = (0, i.useState)(S2), eN = E2 ?? ej, eC = (0, i.useRef)({
      rewrite: o2,
      onRewrite: d2,
      original: ed,
      settings: ea2,
      custom: Z2
    });
    (0, i.useEffect)(() => {
      eC.current = {
        rewrite: o2,
        onRewrite: d2,
        original: ed,
        settings: ea2,
        custom: Z2
      };
    });
    let eT = (0, i.useRef)(false);
    (0, i.useEffect)(() => {
      if (!eT.current) {
        eT.current = true;
        return;
      }
      if (ec) return;
      let e3 = new AbortController(), t3 = window.setTimeout(async () => {
        let {
          rewrite: t4,
          onRewrite: a3,
          original: n2,
          settings: i2
        } = eC.current;
        try {
          var r2;
          let s3;
          if (t4) {
            let a4, r3, o3, l2 = P(n2);
            s3 = D(
              await t4(
                {
                  ...i2,
                  text: l2,
                  instructions: (a4 = [
                    "casual and conversational",
                    "neutral and plain",
                    "formal and polished"
                  ][i2.formality], r3 = [
                    "as short as possible",
                    "about the same length",
                    "more detailed, adding useful context"
                  ][i2.detail], o3 = "neutral" === i2.voice ? "" : ` Use a ${i2.voice} voice.`, `Rewrite this message. Make it ${a4}, ${r3}.${o3} Keep every fact, number and name. Return plain text with the same paragraph breaks.`)
                },
                e3.signal
              )
            );
          } else
            await (r2 = e3.signal, new Promise((e4, t5) => {
              let a4 = window.setTimeout(e4, 340);
              r2.addEventListener(
                "abort",
                () => {
                  window.clearTimeout(a4), t5(new DOMException("Aborted", "AbortError"));
                },
                { once: true }
              );
            })), s3 = O(i2);
          if (e3.signal.aborted) return;
          eh(s3), ep(i2), ef(
            t4 ? P(s3) === P(n2) ? "idle" : "done" : F(i2, k) ? "idle" : "done"
          ), a3?.(P(s3), i2);
        } catch (t5) {
          if (e3.signal.aborted) return;
          ew(
            t5 instanceof Error && t5.message ? t5.message : "The model did not respond."
          ), ef("error");
        }
      }, R2);
      return () => {
        window.clearTimeout(t3), e3.abort();
      };
    }, [el2, eb, R2, ec]);
    let eA = (t3) => {
      void 0 === e2 && ee2(t3), a2?.(t3);
    }, eR = (0, i.useRef)(null), [eE, eS] = (0, i.useState)(z2 ?? (!Z2 && void 0 === e2)), [e$, ez] = (0, i.useState)(false), eL = (0, i.useRef)(0);
    (0, i.useEffect)(() => {
      let e3 = eR.current;
      if (!eE || !e3 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(([e4]) => ez(e4.isIntersecting), {
        threshold: 0.4
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [eE]);
    let eI = (0, i.useRef)(eA);
    (0, i.useEffect)(() => {
      eI.current = eA;
    }), (0, i.useEffect)(() => {
      if (!eE || !e$ || M2 || ec) return;
      let e3 = 0, t3 = () => {
        eI.current(U[eL.current % U.length]), eL.current += 1, e3 = window.setTimeout(t3, 2600);
      };
      return e3 = window.setTimeout(t3, 0 === eL.current ? 1400 : 2600), () => window.clearTimeout(e3);
    }, [eE, e$, M2, ec]);
    let eO = () => {
      eE && eS(false);
    }, eB = (0, i.useMemo)(
      () => (function(e3, t3) {
        let a3 = e3.flatMap((e4) => e4.segments.flatMap(V)).map(Y), n2 = t3.map((e4) => e4.segments.map(V)), i2 = n2.flat(2).map(Y), r2 = a3.length + 1, s3 = i2.length + 1, o3 = new Uint16Array(r2 * s3);
        for (let e4 = a3.length - 1; e4 >= 0; e4--)
          for (let t4 = i2.length - 1; t4 >= 0; t4--)
            o3[e4 * s3 + t4] = a3[e4] === i2[t4] ? o3[(e4 + 1) * s3 + t4 + 1] + 1 : Math.max(o3[(e4 + 1) * s3 + t4], o3[e4 * s3 + t4 + 1]);
        let l2 = Array(i2.length).fill(true);
        for (let e4 = 0, t4 = 0; e4 < a3.length && t4 < i2.length; )
          a3[e4] === i2[t4] ? (l2[t4] = false, e4++, t4++) : o3[(e4 + 1) * s3 + t4] >= o3[e4 * s3 + t4 + 1] ? e4++ : t4++;
        let d3 = 0;
        return n2.map((e4) => e4.map((e5) => e5.map(() => l2[d3++])));
      })(ed, eu),
      [ed, eu]
    ), eM = eB.flat(2).filter(Boolean).length, eW = P(eu), eP = eu.reduce(
      (e3, t3) => e3 + t3.segments.reduce((e4, t4) => e4 + V(t4).length, 0),
      0
    ), eD = Z2 ? P(eu).length > P(ed).length ? eu : ed : W[em.formality][em.detail], { outer: eF, inner: eH } = (I2 = (0, i.useRef)(null), B2 = (0, i.useRef)(null), (0, i.useEffect)(() => {
      let e3, t3 = I2.current, a3 = B2.current;
      if (!t3 || !a3 || "u" < typeof ResizeObserver) return;
      let n2 = a3.offsetHeight, i2 = a3.offsetWidth, s3 = () => {
        t3.style.height = "", t3.style.overflow = "", e3 = void 0;
      }, o3 = new ResizeObserver(() => {
        let o4 = a3.offsetHeight, l2 = a3.offsetWidth, d3 = l2 !== i2;
        if (i2 = l2, o4 === n2) return;
        let c3 = e3 ? t3.getBoundingClientRect().height : n2;
        (n2 = o4, e3?.stop(), M2 || d3) ? s3() : (t3.style.overflow = "hidden", e3 = (0, r.i)(
          t3,
          { height: [c3, o4] },
          { ...v.T.spring.smooth, onComplete: s3 }
        ));
      });
      return o3.observe(a3), () => {
        o3.disconnect(), e3?.stop();
      };
    }, [M2]), { outer: I2, inner: B2 }), eV = "rewriting" === eg ? { icon: "claude", label: `Rewriting with ${x2}` } : "error" === eg ? { icon: "error", label: "Couldn't rewrite" } : "done" === eg ? { icon: "done", label: "Rewritten", meta: H(em) } : { icon: "idle", label: ec ? "No draft yet" : "Original draft" }, eY = "done" === eg ? `Rewritten: ${H(em)}.${Z2 ? "" : " Simulated, nothing was sent."}` : "error" === eg ? `Couldn't rewrite. ${ey}` : "idle" !== eg || ec ? "" : "Showing the original draft.";
    return (0, n.jsxs)("div", {
      ref: eR,
      className: X(K().root, L2),
      "data-changes": eN || void 0,
      "data-phase": eg,
      onPointerDownCapture: eO,
      onFocusCapture: eO,
      children: [
        (0, n.jsxs)("div", {
          className: K().head,
          children: [
            (0, n.jsx)(f.e, {
              name: u2.name,
              src: u2.avatar,
              size: "md",
              className: K().avatar
            }),
            (0, n.jsxs)("div", {
              className: K().who,
              children: [
                (0, n.jsx)("span", { className: K().name, children: u2.name }),
                u2.subject ? (0, n.jsx)("span", {
                  className: K().subject,
                  children: u2.subject
                }) : null
              ]
            }),
            (0, n.jsxs)("div", {
              className: K().counts,
              "aria-hidden": "true",
              children: [
                (0, n.jsxs)("span", {
                  className: K().changed,
                  "data-on": eN && eM > 0 ? "" : void 0,
                  children: [
                    (0, n.jsx)("i", { className: K().swatch }),
                    (0, n.jsx)("span", { className: K().num, children: eM }),
                    " changed"
                  ]
                }),
                (0, n.jsxs)("span", {
                  children: [
                    (0, n.jsx)("span", { className: K().num, children: eP }),
                    " words"
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("div", {
          ref: eF,
          className: K().bodyClip,
          children: (0, n.jsx)("div", {
            ref: eH,
            className: K().body,
            children: ec ? (0, n.jsx)("p", {
              className: K().empty,
              children: "Add a draft to tune its tone."
            }) : (0, n.jsxs)("div", {
              className: K().stack,
              children: [
                (0, n.jsx)("div", {
                  className: K().sizer,
                  "aria-hidden": "true",
                  children: (0, n.jsx)(et, { doc: eD, reduced: M2 })
                }),
                (0, n.jsx)("div", {
                  className: K().text,
                  id: `${J2}-text`,
                  "aria-label": "Message",
                  children: (0, n.jsx)(et, {
                    doc: eu,
                    flags: eB,
                    reduced: M2
                  })
                })
              ]
            })
          })
        }),
        (0, n.jsxs)("div", {
          className: K().controls,
          children: [
            (0, n.jsx)("div", {
              className: K().presets,
              role: "group",
              "aria-label": "Voice",
              children: A2.map((e3) => {
                let t3 = q[e3.voice], a3 = eo2 === e3.voice;
                return (0, n.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: K().chip,
                    "aria-pressed": a3,
                    disabled: ec,
                    onClick: () => eA(
                      a3 ? { ...ea2, voice: "neutral" } : {
                        voice: e3.voice,
                        formality: e3.formality,
                        detail: e3.detail
                      }
                    ),
                    children: [
                      (0, n.jsx)(t3, {
                        size: 14,
                        strokeWidth: 1.75,
                        className: K().chipIcon,
                        "aria-hidden": "true"
                      }),
                      (0, n.jsx)("span", {
                        className: K().chipLabel,
                        children: e3.label
                      })
                    ]
                  },
                  e3.voice
                );
              })
            }),
            (0, n.jsxs)("div", {
              className: K().sliders,
              children: [
                (0, n.jsx)(w.A, {
                  label: "Formality",
                  value: er2,
                  min: 0,
                  max: 2,
                  step: 1,
                  showValue: false,
                  disabled: ec,
                  marks: C.map((e3, t3) => ({ value: t3, label: e3 })),
                  format: (e3) => C[e3] ?? "",
                  onValueChange: (e3) => eA({ ...ea2, formality: e3 })
                }),
                (0, n.jsx)(w.A, {
                  label: "Detail",
                  value: es2,
                  min: 0,
                  max: 2,
                  step: 1,
                  showValue: false,
                  disabled: ec,
                  marks: T.map((e3, t3) => ({ value: t3, label: e3 })),
                  format: (e3) => T[e3] ?? "",
                  onValueChange: (e3) => eA({ ...ea2, detail: e3 })
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: K().foot,
          children: [
            (0, n.jsxs)("div", {
              className: K().status,
              "data-icon": eV.icon,
              children: [
                (0, n.jsx)(en, {
                  id: eV.icon,
                  className: K().statusIcon,
                  reduced: M2,
                  children: "claude" === eV.icon ? (0, n.jsx)(j, {
                    width: 14,
                    height: 14,
                    className: K().claude,
                    title: "",
                    "aria-hidden": "true"
                  }) : "done" === eV.icon ? (0, n.jsx)(h.A, { size: 14, strokeWidth: 2 }) : "error" === eV.icon ? (0, n.jsx)(m.A, { size: 14, strokeWidth: 1.75 }) : (0, n.jsx)(p.A, { size: 14, strokeWidth: 1.75 })
                }),
                (0, n.jsx)(en, {
                  id: `${eV.label}${eV.meta ?? ""}`,
                  className: K().statusText,
                  reduced: M2,
                  children: "claude" === eV.icon ? (0, n.jsx)(_.n, {
                    className: K().statusLabel,
                    children: eV.label
                  }) : (0, n.jsxs)("span", {
                    className: K().statusLabel,
                    children: [
                      eV.label,
                      eV.meta ? (0, n.jsx)("span", {
                        className: K().statusMeta,
                        children: eV.meta
                      }) : null
                    ]
                  })
                }),
                "error" === eg ? (0, n.jsxs)("button", {
                  type: "button",
                  className: K().retry,
                  onClick: () => {
                    ef("rewriting"), e_((e3) => e3 + 1);
                  },
                  children: [
                    (0, n.jsx)(g.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Retry"
                  ]
                }) : null
              ]
            }),
            (0, n.jsxs)("div", {
              className: K().actions,
              children: [
                (0, n.jsx)(b.d, {
                  label: "Changes",
                  "aria-label": "Highlight changes",
                  checked: eN,
                  onCheckedChange: (e3) => {
                    void 0 === E2 && ek(e3), $2?.(e3);
                  },
                  disabled: ec,
                  className: K().switch
                }),
                (0, n.jsx)(y.CopyButton, {
                  value: eW,
                  label: "Copy",
                  disabled: ec,
                  onCopied: () => c2?.(eW)
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: K().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eY
        })
      ]
    });
  }
  var er = a(8301), es = a.n(er);
  function eo() {
    return (0, n.jsx)("div", {
      className: es().demo,
      children: (0, n.jsx)(ei, {})
    });
  }
  let el = eo;
};

__m(__module,__exports,__require);
}