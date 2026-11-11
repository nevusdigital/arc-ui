function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { AgentCursorDemo: () => H, default: () => U });
  var a = r(95155), n = r(12115), i = r(18310), s = r(28245), l = r(92171), o = r(80642), c = r(25354), u = r(64577), d = r(15330), h = r(40852), p = r(35484), f = r(18986), g = r(92298), m = r(86272), y = r(7770), x = r(92218), v = r(51288), b = r(52898);
  function _({ title: e2 = "Claude", ...t2 }) {
    return (0, a.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, a.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  let w = [
    { id: "title", type: "title", text: "Usage-based billing launch" },
    {
      id: "summary",
      type: "paragraph",
      text: "On November 18 every Team workspace moves to usage-based billing: seats plus metered agent runs, invoiced monthly through Stripe."
    },
    { id: "goals-heading", type: "heading", text: "Goals" },
    {
      id: "goals",
      type: "paragraph",
      text: "So basically the main thing we are trying to do here is make it so customers can actually see what they are going to pay before the invoice shows up, because a lot of people were surprised by their bills last quarter and that turned into a lot of support tickets."
    },
    {
      id: "rollout",
      type: "paragraph",
      text: "Week one goes to 5% of workpsaces behind the usage_billing flag. We widen to 50% once refund requests stay under 0.4% for seven days, then ship to everyone on December 2."
    }
  ], k = [
    {
      type: "rewrite",
      blockId: "goals",
      label: "Tightening the goals",
      text: "Customers should see what they will pay before the invoice arrives. Surprise bills drove 31% of billing tickets in Q3, so a live usage meter and spend alerts ship on day one."
    },
    {
      type: "insert",
      afterBlockId: "goals",
      label: "Adding a heading",
      block: { id: "rollout-heading", type: "heading", text: "Rollout" }
    },
    {
      type: "fix",
      blockId: "rollout",
      find: "workpsaces",
      text: "workspaces",
      label: "Fixing a typo"
    }
  ];
  var j = r(62740), A = r.n(j);
  let N = "#D97757", C = { name: "Claude", color: N }, R = { name: "Emma Collins", avatar: "media/people/emma-collins.svg" }, E = [0.4, 0, 0.2, 1], M = [0.35, 0, 0.6, 1], L = [...y.T.ease.standard], I = [4, 5, 3, 6, 4, 5], T = (e2, t2) => e2.map((e3) => ({ id: e3.id, type: e3.type, text: e3.text, fresh: t2 })), S = () => new DOMException("Aborted", "AbortError"), P = (e2) => e2.label ?? ("rewrite" === e2.type ? "Rewriting a paragraph" : "fix" === e2.type ? "Fixing a typo" : "heading" === e2.block.type ? "Adding a heading" : "Adding a paragraph");
  function $({
    blocks: e2 = w,
    meta: t2,
    edits: r2,
    run: j2,
    agent: O2 = C,
    collaborator: D2 = R,
    autoPlay: Y2 = true,
    loop: F2,
    speed: q2 = 1,
    onAccept: H2,
    onUndo: U2,
    onPhaseChange: V,
    simulated: G,
    className: K
  }) {
    let X = (0, i.I)() ?? false, Z = e2 === w && !r2 && !j2, J = t2 ?? (e2 === w ? "Emma Collins \xB7 Target Nov 18, 2026" : void 0), Q = (F2 ?? Z) && !X, ee = O2.color ?? N, et = D2?.name.split(/\s+/)[0] ?? "", er = (0, n.useRef)(null), ea = (0, n.useRef)(null), en = (0, n.useRef)(/* @__PURE__ */ new Map()), ei = (0, n.useRef)(/* @__PURE__ */ new Map()), [es, el] = (0, n.useState)(() => T(e2)), [eo, ec] = (0, n.useState)(Y2 ? "thinking" : "idle"), [eu, ed] = (0, n.useState)(""), [eh, ep] = (0, n.useState)(0), [ef, eg] = (0, n.useState)(""), [em, ey] = (0, n.useState)(null), [ex, ev] = (0, n.useState)(false), [eb, e_] = (0, n.useState)(false), [ew, ek] = (0, n.useState)(false), [ej, eA] = (0, n.useState)(true), [eN, eC] = (0, n.useState)({ agent: false, human: false }), [eR, eE] = (0, n.useState)(false), eM = (0, n.useRef)(es), eL = (0, n.useRef)(eo), eI = (0, n.useRef)({
      blocks: e2,
      edits: r2,
      run: j2,
      speed: q2,
      onAccept: H2,
      onUndo: U2,
      reduced: X,
      loopDefault: Q
    });
    (0, n.useLayoutEffect)(() => {
      eM.current = es, eL.current = eo, eI.current = {
        blocks: e2,
        edits: r2,
        run: j2,
        speed: q2,
        onAccept: H2,
        onUndo: U2,
        reduced: X,
        loopDefault: Q
      };
    });
    let eT = (0, n.useRef)({ x: (0, s.d)(0), y: (0, s.d)(0) }).current, eS = (0, n.useRef)({ x: (0, s.d)(0), y: (0, s.d)(0) }).current, eP = (0, n.useRef)(true), e$ = (0, n.useRef)(0), eW = (0, n.useRef)(null), ez = (0, n.useRef)(false), eB = (0, n.useRef)(null), eO = (0, n.useRef)(Q), eD = (0, n.useRef)(0), eY = (0, n.useRef)(e2), eF = (0, n.useRef)(null), eq = (0, n.useRef)({ hover: false, focus: false }), eH = (0, n.useRef)(true), eU = (0, n.useRef)(/* @__PURE__ */ new Set()), eV = (0, n.useRef)(0), eG = (0, n.useRef)(0);
    (0, n.useEffect)(() => {
      V?.(eo);
    }, [eo, V]);
    let eK = (0, n.useCallback)(
      () => eH.current ? Promise.resolve() : new Promise((e10) => {
        eU.current.add(e10);
      }),
      []
    ), eX = (0, n.useCallback)(
      (e10, t3) => new Promise((r3, a2) => {
        if (t3.aborted) return a2(S());
        let n2 = () => {
          window.clearTimeout(i2), a2(S());
        }, i2 = window.setTimeout(() => {
          t3.removeEventListener("abort", n2), eK().then(() => t3.aborted ? a2(S()) : r3());
        }, e10 / eI.current.speed);
        t3.addEventListener("abort", n2, { once: true });
      }),
      [eK]
    ), eZ = (0, n.useCallback)(
      () => er.current?.getBoundingClientRect() ?? new DOMRect(),
      []
    ), eJ = (0, n.useCallback)(
      (e10) => e10 ? (function(e11, t3) {
        let r3 = document.createRange();
        r3.selectNodeContents(e11);
        let a2 = parseFloat(getComputedStyle(e11).lineHeight) || 24, n2 = [];
        for (let e12 of Array.from(r3.getClientRects())) {
          if (e12.width < 1) continue;
          let r4 = e12.top + e12.height / 2 - t3.top, i2 = e12.left - t3.left, s2 = n2.find((e13) => Math.abs(e13.y + e13.h / 2 - r4) < a2 / 2);
          if (s2) {
            let t4 = Math.max(s2.x + s2.w, i2 + e12.width);
            s2.x = Math.min(s2.x, i2), s2.w = t4 - s2.x;
          } else n2.push({ x: i2, y: r4 - a2 / 2, w: e12.width, h: a2 });
        }
        return n2.sort((e12, t4) => e12.y - t4.y);
      })(e10, eZ()) : [],
      [eZ]
    ), eQ = (0, n.useCallback)(() => {
      let e10 = eW.current?.getBoundingClientRect();
      if (!e10) return null;
      let t3 = eZ();
      return {
        x: e10.left - t3.left + e10.width / 2,
        y: e10.top - t3.top + e10.height / 2
      };
    }, [eZ]), e0 = (0, n.useCallback)(() => {
      let e10 = eM.current.find((e11, t4) => t4 > 0 && "paragraph" === e11.type), t3 = er.current, r3 = eJ(e10 ? en.current.get(e10.id) : void 0).at(-1);
      return r3 && t3 ? {
        x: Math.min(r3.x + r3.w + 10, t3.clientWidth - 112 - 4),
        y: r3.y + 0.55 * r3.h
      } : null;
    }, [eJ]), e1 = (0, n.useCallback)(
      (e10, t3, r3 = {}) => new Promise((a2) => {
        let n2 = "agent" === e10 ? eT : eS;
        n2.stop?.();
        let i2 = er.current?.clientWidth ?? 0, s2 = t3.x > i2 - 112;
        eC((t4) => t4[e10] === s2 ? t4 : { ...t4, [e10]: s2 });
        let o2 = n2.x.get(), c2 = n2.y.get(), u2 = t3.x - o2, d2 = t3.y - c2, h2 = Math.hypot(u2, d2);
        if (eI.current.reduced || h2 < 1)
          return n2.x.set(t3.x), n2.y.set(t3.y), a2();
        let p2 = (r3.ms ?? Math.min(600, Math.max(280, 220 + 0.7 * h2))) / eI.current.speed, f2 = r3.straight ? 0 : Math.min(0.14 * h2, 32), g2 = o2 + u2 / 2 - d2 / h2 * f2, m2 = c2 + d2 / 2 + u2 / h2 * f2, y2 = (0, l.i)(0, 1, {
          duration: p2 / 1e3,
          ease: r3.ease ?? E,
          onUpdate: (e11) => {
            let r4 = 1 - e11;
            n2.x.set(r4 * r4 * o2 + 2 * r4 * e11 * g2 + e11 * e11 * t3.x), n2.y.set(r4 * r4 * c2 + 2 * r4 * e11 * m2 + e11 * e11 * t3.y);
          },
          onComplete: () => {
            n2.stop = void 0, a2();
          }
        });
        n2.stop = () => {
          y2.stop(), n2.stop = void 0, a2();
        };
      }),
      [eT, eS]
    ), e22 = (0, n.useCallback)(
      async (e10, t3) => {
        eP.current = false, window.clearTimeout(e$.current), eA(false), await e1("agent", e10, t3);
      },
      [e1]
    ), e5 = (0, n.useCallback)(async () => {
      let e10 = eQ();
      eP.current = true, window.clearTimeout(e$.current), e$.current = window.setTimeout(
        () => eA(true),
        180 * !eI.current.reduced
      ), e10 && await e1("agent", e10);
    }, [e1, eQ]), e4 = (e10, t3) => el(
      (r3) => r3.map(
        (r4) => r4.id === e10 ? { ...r4, ..."function" == typeof t3 ? t3(r4) : t3 } : r4
      )
    ), e6 = () => new Promise(
      (e10) => requestAnimationFrame(() => requestAnimationFrame(() => e10()))
    ), e3 = (0, n.useCallback)(
      (e10, t3) => ey({ key: ++eV.current, boxes: e10, ms: t3 }),
      []
    ), e8 = (0, n.useCallback)(
      async (e10, t3) => {
        let r3 = eI.current.reduced;
        if ("rewrite" === e10.type) {
          let a2 = eJ(en.current.get(e10.blockId));
          if (!a2.length) return;
          let n2 = a2[0], i2 = a2[a2.length - 1];
          await e22({ x: n2.x, y: n2.y + 0.6 * n2.h }), await eX(90, t3);
          let s2 = Math.min(520, Math.max(240, 110 * a2.length));
          e3(a2, s2), await e22(
            { x: i2.x + i2.w, y: i2.y + 0.6 * i2.h },
            { ms: s2, straight: true, ease: M }
          ), await eX(180, t3), eD.current++, ey(null), e4(e10.blockId, { fading: true }), await eX(110, t3);
          let l2 = (function(e11) {
            let t4 = e11.split(/(?=\s)/), r4 = [];
            for (let e12 = 0, a3 = 0; e12 < t4.length; a3++) {
              let n3 = I[a3 % I.length];
              r4.push(t4.slice(e12, e12 + n3).join("")), e12 += n3;
            }
            return r4;
          })(e10.text);
          if (e4(e10.blockId, {
            text: e10.text,
            chunks: l2,
            shown: r3 ? l2.length : 0,
            fading: false,
            pending: true,
            fix: void 0
          }), await e6(), r3)
            return;
          let o2 = eJ(en.current.get(e10.blockId)).at(-1);
          o2 && e22(
            { x: o2.x + o2.w, y: o2.y + 0.6 * o2.h },
            { ms: Math.max(320, 34 * l2.length + 140), ease: E }
          );
          for (let r4 = 1; r4 <= l2.length; r4++)
            e4(e10.blockId, { shown: r4 }), await eX(34, t3);
          await eX(200, t3);
        } else if ("insert" === e10.type) {
          let r4 = eM.current.findIndex((t4) => t4.id === e10.afterBlockId);
          if (r4 < 0) return;
          let a2 = eM.current[r4 + 1], n2 = eJ(a2 ? en.current.get(a2.id) : void 0)[0], i2 = eJ(en.current.get(e10.afterBlockId)).at(-1), s2 = n2 ? { x: n2.x, y: n2.y + 6 } : i2 ? { x: i2.x, y: i2.y + i2.h + 18 } : null;
          s2 && await e22(s2), await eX(120, t3), eD.current++, el((t4) => {
            let r5 = t4.findIndex((t5) => t5.id === e10.afterBlockId), a3 = {
              id: e10.block.id,
              type: e10.block.type,
              text: e10.block.text,
              inserted: true,
              pending: true
            };
            return [...t4.slice(0, r5 + 1), a3, ...t4.slice(r5 + 1)];
          }), await eX(300, t3);
          let l2 = eJ(en.current.get(e10.block.id)).at(-1);
          l2 && await e22({ x: l2.x + l2.w + 2, y: l2.y + 0.6 * l2.h }, { ms: 260 }), await eX(240, t3);
        } else {
          let r4 = eJ(ei.current.get(e10.blockId))[0];
          if (!r4) return;
          await e22({ x: r4.x + 0.55 * r4.w, y: r4.y + 0.62 * r4.h }), await eX(80, t3), e3([r4], 140), await eX(260, t3), eD.current++, ey(null), e4(
            e10.blockId,
            (e11) => e11.fix ? {
              fix: { ...e11.fix, applied: true },
              text: e11.text.slice(0, e11.fix.start) + e11.fix.to + e11.text.slice(e11.fix.start + e11.fix.from.length),
              pending: true
            } : {}
          ), await eX(320, t3);
        }
      },
      [eJ, e22, e3, eX]
    ), e7 = (0, n.useCallback)(() => {
      "review" === eL.current && (el((e10) => e10.map((e11) => ({ ...e11, pending: false }))), ec("accepted"), eI.current.onAccept?.(
        eM.current.map((e10) => ({ id: e10.id, type: e10.type, text: e10.text }))
      ), eF.current?.(), eF.current = null);
    }, []), e9 = (0, n.useCallback)(() => {
      if ("review" !== eL.current) return;
      let e10 = eY.current, t3 = ++eG.current;
      el(
        (r3) => e10.map((e11) => {
          let a2 = r3.find((t4) => t4.id === e11.id);
          if (a2?.fix?.applied && !a2.chunks)
            return {
              id: e11.id,
              type: e11.type,
              text: e11.text,
              fix: { ...a2.fix, applied: false }
            };
          let n2 = !a2 || a2.text !== e11.text || !!a2.chunks;
          return {
            id: e11.id,
            type: e11.type,
            text: e11.text,
            fresh: n2 ? t3 : a2?.fresh
          };
        })
      ), ec("reverted"), eI.current.onUndo?.(e10), eF.current?.(), eF.current = null;
    }, []), te = (0, n.useCallback)(
      async (e10) => {
        for (await eX(1500, e10); eq.current.hover || eq.current.focus; )
          await eX(250, e10);
        if ("review" !== eL.current) return;
        let t3 = ea.current?.getBoundingClientRect(), r3 = eZ();
        ez.current = true;
        try {
          if (t3 && await e1(
            "human",
            {
              x: t3.left - r3.left + 0.55 * t3.width,
              y: t3.top - r3.top + 0.62 * t3.height
            },
            { ms: 520 }
          ), e10.aborted || "review" !== eL.current)
            return;
          eE(true), await eX(130, e10), eE(false), e7(), await eX(420, e10);
          let a2 = e0();
          a2 && await e1("human", a2, { ms: 560 });
        } finally {
          eE(false), ez.current = false;
        }
      },
      [e7, e1, e0, eZ, eX]
    ), tt = (0, n.useCallback)(
      async (e10) => {
        let t3 = eI.current.blocks, r3 = eM.current, a2 = r3.length !== t3.length || r3.some((e11, r4) => e11.text !== t3[r4]?.text || e11.pending || e11.fix);
        ey(null), a2 && (ev(true), await eX(130, e10), e_(true), el(T(t3)), await e6(), e_(false), ev(false));
      },
      [eX]
    ), tr = (0, n.useCallback)(
      async (e10) => {
        for (; ; ) {
          let t3;
          await tt(e10), await eK(), ec("thinking"), eg(""), eD.current = 0, eY.current = eI.current.blocks, eP.current || await e5();
          let r3 = (async () => {
            await eX(240, e10);
            let t4 = eM.current.find(
              (e11, t5) => t5 > 0 && "paragraph" === e11.type
            ), r4 = eJ(t4 ? en.current.get(t4.id) : void 0)[0];
            r4 && await e22(
              { x: r4.x + 0.3 * Math.min(r4.w, 480), y: r4.y + 0.6 * r4.h },
              { ms: 520 }
            );
          })();
          try {
            let { run: a3, edits: n3 } = eI.current, i3 = a3 ? a3(e10) : eX(900, e10).then(() => n3 ?? k);
            [t3] = await Promise.all([i3, r3, eX(700, e10)]);
          } catch (t4) {
            if (e10.aborted) throw S();
            if (eg(
              t4 instanceof Error && t4.message ? t4.message : "The edit could not finish"
            ), ec("error"), e5(), !eO.current)
              return;
            await eX(2600, e10);
            continue;
          }
          let a2 = eM.current, n2 = t3.filter(
            (e11) => "insert" === e11.type ? a2.some((t4) => t4.id === e11.afterBlockId) && !a2.some((t4) => t4.id === e11.block.id) : "rewrite" === e11.type ? a2.some((t4) => t4.id === e11.blockId) : a2.some(
              (t4) => t4.id === e11.blockId && t4.text.includes(e11.find)
            )
          );
          if (!n2.length) {
            if (ec("empty"), e5(), !eO.current) return;
            await eX(2e3, e10);
            continue;
          }
          for (let t4 of (el(
            (e11) => e11.map((e12) => {
              let t5 = n2.find((t6) => "fix" === t6.type && t6.blockId === e12.id);
              return t5 && "fix" === t5.type ? {
                ...e12,
                fix: {
                  start: e12.text.indexOf(t5.find),
                  from: t5.find,
                  to: t5.text,
                  applied: false
                }
              } : e12;
            })
          ), ec("editing"), n2))
            ed(P(t4)), await e8(t4, e10), ep(eD.current), await eX(200, e10);
          ep(eD.current), ec("review"), e5();
          let i2 = new Promise((e11) => {
            eF.current = e11;
          });
          if (eO.current && te(e10).catch(() => {
          }), await Promise.race([
            i2,
            new Promise(
              (t4, r4) => e10.addEventListener("abort", () => r4(S()), { once: true })
            )
          ]), !eO.current)
            return;
          await eX(1900, e10);
        }
      },
      [e8, te, eJ, e22, e5, tt, eX, eK]
    ), ta = (0, n.useCallback)(() => {
      eB.current?.abort();
      let e10 = new AbortController();
      eB.current = e10, eO.current = eI.current.loopDefault, eF.current = null, tr(e10.signal).catch((e11) => {
        e11 instanceof DOMException && "AbortError" === e11.name || console.error(e11);
      });
    }, [tr]), tn = (0, n.useCallback)(() => {
      eB.current?.abort(), eB.current = null, eO.current = false, eT.stop?.(), ey(null), el(
        (e10) => e10.map((e11) => ({
          ...e11,
          fading: false,
          shown: e11.chunks ? e11.chunks.length : e11.shown,
          fix: e11.fix?.applied ? e11.fix : void 0
        }))
      ), ep(eD.current), ec(eD.current > 0 ? "review" : "stopped"), e5();
    }, [eT, e5]);
    (0, n.useEffect)(() => {
      let e10 = Y2 ? requestAnimationFrame(ta) : 0;
      return () => {
        cancelAnimationFrame(e10), eB.current?.abort();
      };
    }, [Y2, ta]);
    let ti = e2.map((e10) => `${e10.id}\0${e10.type}\0${e10.text}`).join(""), ts = (0, n.useRef)(ti);
    (0, n.useEffect)(() => {
      ts.current === ti || (ts.current = ti, "thinking" !== eL.current && "editing" !== eL.current && "review" !== eL.current && el(T(eI.current.blocks)));
    }, [ti]), (0, n.useEffect)(() => {
      let e10 = er.current;
      if (!e10 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(
        ([e11]) => {
          eH.current = e11.isIntersecting, e11.isIntersecting && (eU.current.forEach((e12) => e12()), eU.current.clear());
        },
        { threshold: 0.1 }
      );
      return t3.observe(e10), () => {
        t3.disconnect(), window.clearTimeout(e$.current);
      };
    }, []), (0, n.useLayoutEffect)(() => {
      let e10 = er.current;
      if (!e10) return;
      let t3 = () => {
        let t4 = eQ(), r4 = e0();
        t4 && eP.current && !eT.stop && (eT.x.set(t4.x), eT.y.set(t4.y), eC((r5) => ({ ...r5, agent: t4.x > e10.clientWidth - 112 }))), r4 && !ez.current && (eS.stop?.(), eS.x.set(r4.x), eS.y.set(r4.y), eC((t5) => ({ ...t5, human: r4.x > e10.clientWidth - 112 }))), ey(null);
      };
      t3(), ek(true);
      let r3 = e10.clientWidth, a2 = new ResizeObserver(() => {
        Math.abs(e10.clientWidth - r3) > 1 && (r3 = e10.clientWidth, t3());
      });
      return a2.observe(e10), () => a2.disconnect();
    }, [eT, eS, eQ, e0]), (0, n.useEffect)(() => {
      if (!D2 || X) return;
      let e10 = 0, t3 = () => {
        e10 = window.setTimeout(
          () => {
            let e11 = e0();
            e11 && eH.current && !ez.current && e1(
              "human",
              {
                x: e11.x + (Math.random() - 0.5) * 40,
                y: e11.y + (Math.random() - 0.5) * 10
              },
              { ms: 720 }
            ), t3();
          },
          1700 + 900 * Math.random()
        );
      };
      return t3(), () => window.clearTimeout(e10);
    }, [D2, X, e1, e0]);
    let tl = "thinking" === eo || "editing" === eo, to = ((e10, t3, r3, a2, n2) => {
      let i2 = `${a2} ${1 === a2 ? "edit" : "edits"}`;
      switch (e10) {
        case "idle":
          return `${t3} is in this doc`;
        case "thinking":
          return "Reading the doc";
        case "editing":
          return r3;
        case "review":
          return `${i2} ready for review`;
        case "accepted":
          return `Accepted ${i2}`;
        case "reverted":
          return `Undid ${i2}`;
        case "stopped":
          return "Stopped before any edits";
        case "empty":
          return "No edits needed";
        case "error":
          return n2;
      }
    })(eo, O2.name, eu, eh, ef), tc = "accepted" === eo ? (0, a.jsx)(u.A, { className: A().success }) : "reverted" === eo ? (0, a.jsx)(d.A, {}) : "stopped" === eo ? (0, a.jsx)(h.A, {}) : "empty" === eo ? (0, a.jsx)(u.A, {}) : "error" === eo ? (0, a.jsx)(p.A, { className: A().danger }) : "review" === eo ? (0, a.jsx)(f.A, {}) : null, tu = (G ?? Z) && ("review" === eo || "accepted" === eo || "reverted" === eo || "error" === eo) ? " Simulated, nothing was saved." : "", td = tl ? { label: "Stop", icon: (0, a.jsx)(h.A, {}), onClick: tn } : "error" === eo ? { label: "Retry", icon: (0, a.jsx)(g.A, {}), onClick: ta } : "idle" === eo ? { label: `Ask ${O2.name}`, icon: (0, a.jsx)(m.A, {}), onClick: ta } : "review" === eo ? null : { label: "Run again", icon: (0, a.jsx)(g.A, {}), onClick: ta }, th = O2.mark ?? (0, a.jsx)(_, { "aria-hidden": "true" });
    return (0, a.jsxs)("div", {
      ref: er,
      className: [A().root, K].filter(Boolean).join(" "),
      style: { "--agent": ee, "--human": D2?.color ?? "var(--series-2)" },
      onPointerEnter: () => {
        eq.current.hover = true;
      },
      onPointerLeave: () => {
        eq.current.hover = false;
      },
      onFocus: () => {
        eq.current.focus = true;
      },
      onBlur: (e10) => {
        e10.currentTarget.contains(e10.relatedTarget) || (eq.current.focus = false);
      },
      children: [
        (0, a.jsxs)("div", {
          className: A().header,
          children: [
            (0, a.jsxs)("div", {
              className: A().stack,
              children: [
                (0, a.jsx)("span", {
                  ref: eW,
                  className: A().agentAvatar,
                  "data-working": tl,
                  role: "img",
                  "aria-label": O2.name,
                  children: th
                }),
                D2 ? (0, a.jsx)(x.e, {
                  className: A().stackAvatar,
                  name: D2.name,
                  src: D2.avatar,
                  size: "sm"
                }) : null
              ]
            }),
            (0, a.jsx)("div", {
              className: A().status,
              "aria-hidden": "true",
              children: (0, a.jsx)(o.N, {
                mode: "popLayout",
                initial: false,
                children: (0, a.jsxs)(
                  c.PY1.span,
                  {
                    className: A().statusInner,
                    initial: X ? { opacity: 0 } : { opacity: 0, y: 2 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.16 * !X, ease: L }
                    },
                    exit: { opacity: 0, transition: { duration: 0.1 * !X } },
                    children: [
                      tc ? (0, a.jsx)("span", {
                        className: A().statusIcon,
                        children: tc
                      }) : null,
                      (0, a.jsx)("span", {
                        className: A().statusLabel,
                        children: tl ? (0, a.jsx)(b.n, { children: to }) : to
                      })
                    ]
                  },
                  `${eo}:${to}`
                )
              })
            }),
            (0, a.jsx)("span", {
              className: A().srOnly,
              role: "status",
              "aria-live": "polite",
              children: `${to}.${tu}`
            }),
            (0, a.jsx)("div", {
              className: A().action,
              children: (0, a.jsx)(o.N, {
                initial: false,
                children: td ? (0, a.jsx)(
                  c.PY1.span,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.14 * !X },
                    children: (0, a.jsx)(v.$, {
                      variant: "ghost",
                      size: "sm",
                      onClick: td.onClick,
                      children: (0, a.jsxs)("span", {
                        className: A().buttonInner,
                        children: [td.icon, td.label]
                      })
                    })
                  },
                  "action"
                ) : null
              })
            })
          ]
        }),
        (0, a.jsx)("div", {
          className: A().selectionLayer,
          "aria-hidden": "true",
          children: (0, a.jsx)(o.N, {
            children: em ? (0, a.jsx)(
              c.PY1.div,
              {
                exit: { opacity: 0, transition: { duration: 0.12 * !X } },
                children: em.boxes.map((e10, t3) => {
                  let r3 = em.ms / em.boxes.length / 1e3;
                  return (0, a.jsx)(
                    c.PY1.span,
                    {
                      className: A().selection,
                      style: {
                        left: e10.x,
                        top: e10.y,
                        width: e10.w,
                        height: e10.h
                      },
                      initial: { scaleX: +!!X },
                      animate: { scaleX: 1 },
                      transition: {
                        duration: X ? 0 : r3,
                        delay: X ? 0 : t3 * r3,
                        ease: "linear"
                      }
                    },
                    t3
                  );
                })
              },
              em.key
            ) : null
          })
        }),
        (0, a.jsx)("article", {
          className: A().doc,
          "data-fading": ex,
          "aria-label": es[0]?.text ?? "Document",
          "aria-busy": tl,
          children: (0, a.jsx)(o.N, {
            initial: false,
            children: es.map((e10, t3) => {
              let r3, n2;
              return (0, a.jsx)(
                c.PY1.div,
                {
                  className: A().block,
                  "data-type": e10.type,
                  exit: {
                    height: 0,
                    opacity: 0,
                    transition: eb || X ? { duration: 0 } : {
                      opacity: { duration: 0.1 },
                      height: y.T.spring.snappy
                    }
                  },
                  children: (0, a.jsxs)(z, {
                    enter: e10.inserted,
                    instant: eb || X,
                    children: [
                      (0, a.jsx)("div", {
                        className: A().pad,
                        children: (0, a.jsx)(B, {
                          block: e10,
                          reduced: X,
                          textRef: (r3 = e10.id, (e11) => {
                            e11 ? en.current.set(r3, e11) : en.current.delete(r3);
                          }),
                          fixRef: (n2 = e10.id, (e11) => {
                            e11 ? ei.current.set(n2, e11) : ei.current.delete(n2);
                          })
                        })
                      }),
                      0 === t3 && J ? (0, a.jsx)("div", {
                        className: A().meta,
                        children: J
                      }) : null
                    ]
                  })
                },
                e10.id
              );
            })
          })
        }),
        (0, a.jsx)("div", {
          className: A().barWrap,
          children: (0, a.jsx)(o.N, {
            children: "review" === eo ? (0, a.jsxs)(c.PY1.div, {
              className: A().bar,
              role: "group",
              "aria-label": "Review edits",
              initial: X ? { opacity: 0 } : { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              exit: X ? { opacity: 0 } : { opacity: 0, y: 8 },
              transition: { duration: 0.2 * !X, ease: L },
              children: [
                (0, a.jsxs)("span", {
                  className: A().barLabel,
                  children: [
                    (0, a.jsx)("span", {
                      className: A().barMark,
                      children: th
                    }),
                    (0, a.jsxs)("span", {
                      className: A().barCount,
                      children: [
                        eh,
                        " ",
                        1 === eh ? "edit" : "edits",
                        (0, a.jsxs)("span", {
                          className: A().barBy,
                          children: [" by ", O2.name]
                        })
                      ]
                    })
                  ]
                }),
                (0, a.jsx)(v.$, {
                  variant: "ghost",
                  size: "sm",
                  onClick: e9,
                  children: (0, a.jsxs)("span", {
                    className: A().buttonInner,
                    children: [(0, a.jsx)(d.A, {}), "Undo"]
                  })
                }),
                (0, a.jsx)(v.$, {
                  ref: ea,
                  variant: "primary",
                  size: "sm",
                  onClick: e7,
                  children: (0, a.jsxs)("span", {
                    className: A().buttonInner,
                    children: [(0, a.jsx)(u.A, {}), "Accept changes"]
                  })
                })
              ]
            }) : null
          })
        }),
        (0, a.jsxs)("div", {
          className: A().cursorLayer,
          "aria-hidden": "true",
          children: [
            D2 ? (0, a.jsxs)(W, {
              x: eS.x,
              y: eS.y,
              color: "var(--human)",
              flip: eN.human,
              ready: ew,
              pressed: eR,
              reduced: X,
              children: [
                D2.avatar ? (0, a.jsx)("img", {
                  className: A().tagAvatar,
                  src: D2.avatar,
                  alt: "",
                  width: 16,
                  height: 16
                }) : null,
                et
              ]
            }) : null,
            (0, a.jsxs)(W, {
              x: eT.x,
              y: eT.y,
              color: "var(--agent)",
              flip: eN.agent,
              ready: ew && !ej,
              reduced: X,
              agent: true,
              children: [
                (0, a.jsx)("span", { className: A().tagMark, children: th }),
                O2.name
              ]
            })
          ]
        })
      ]
    });
  }
  function W({
    x: e2,
    y: t2,
    color: r2,
    flip: n2,
    ready: i2,
    pressed: s2 = false,
    reduced: l2,
    agent: o2 = false,
    children: u2
  }) {
    return (0, a.jsxs)(c.PY1.div, {
      className: A().cursor,
      "data-ready": i2,
      "data-agent": o2,
      style: { x: e2, y: t2, "--c": r2 },
      children: [
        (0, a.jsx)(c.PY1.svg, {
          className: A().arrow,
          viewBox: "0 0 20 20",
          animate: { scale: s2 ? 0.84 : 1 },
          transition: l2 ? { duration: 0 } : { duration: 0.12, ease: "easeOut" },
          children: (0, a.jsx)("path", {
            d: "M4.4 2.9 16.6 9.1c.8.4.7 1.5-.2 1.7l-5 1.2a1.1 1.1 0 0 0-.8.6l-2.2 4.7c-.4.8-1.6.7-1.8-.2L2.8 4.2c-.2-.9.8-1.7 1.6-1.3Z"
          })
        }),
        (0, a.jsx)("span", { className: A().tag, "data-flip": n2, children: u2 })
      ]
    });
  }
  function z({ children: e2, enter: t2 = false, instant: r2 = false }) {
    let i2 = (0, n.useRef)(null), s2 = (0, n.useRef)(null), o2 = (0, n.useRef)(r2);
    return (0, n.useLayoutEffect)(() => {
      o2.current = r2;
    }), (0, n.useLayoutEffect)(() => {
      let e3, r3 = i2.current, a2 = s2.current;
      if (!r3 || !a2 || "u" < typeof ResizeObserver) return;
      let n2 = t2 ? 0 : null, c2 = () => {
        let t3 = a2.getBoundingClientRect().height;
        if (null === n2) {
          n2 = t3;
          return;
        }
        if (0.5 > Math.abs(t3 - n2)) return;
        let i3 = r3.getBoundingClientRect().height;
        if (n2 = t3, e3?.stop(), o2.current) {
          r3.style.height = "auto";
          return;
        }
        (e3 = (0, l.i)(
          r3,
          { height: [i3, t3] },
          { ...y.T.spring.snappy, visualDuration: 0.24 }
        )).then(() => {
          n2 === t3 && (r3.style.height = "auto");
        });
      };
      c2();
      let u2 = new ResizeObserver(c2);
      return u2.observe(a2), () => {
        u2.disconnect(), e3?.stop();
      };
    }, [t2]), (0, a.jsx)("div", {
      ref: i2,
      className: A().fit,
      style: t2 ? { height: 0 } : void 0,
      children: (0, a.jsx)("div", { ref: s2, children: e2 })
    });
  }
  function B({ block: e2, reduced: t2, textRef: r2, fixRef: i2 }) {
    let s2, l2 = "title" === e2.type ? "h3" : "heading" === e2.type ? "h4" : "p";
    if (e2.chunks) {
      let t3 = e2.shown ?? e2.chunks.length, r3 = t3 < e2.chunks.length;
      s2 = e2.chunks.map(
        (i3, s3) => (0, a.jsxs)(
          n.Fragment,
          {
            children: [
              r3 && s3 === t3 ? (0, a.jsx)("span", {
                className: A().caretSlot,
                children: (0, a.jsx)("span", { className: A().caret })
              }) : null,
              (0, a.jsx)("span", {
                className: A().chunk,
                "data-shown": s3 < t3,
                "data-pending": !!e2.pending,
                children: i3
              })
            ]
          },
          s3
        )
      );
    } else if (e2.fix) {
      let { start: r3, from: n2, to: l3, applied: u2 } = e2.fix, d2 = u2 ? l3 : n2;
      s2 = (0, a.jsxs)(a.Fragment, {
        children: [
          e2.text.slice(0, r3),
          (0, a.jsx)("span", {
            ref: i2,
            className: A().swap,
            children: (0, a.jsx)(o.N, {
              initial: false,
              children: (0, a.jsx)(
                c.PY1.span,
                {
                  className: u2 ? A().tint : A().typo,
                  "data-pending": u2 && !!e2.pending,
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { duration: 0.16 * !t2, delay: 0.05 * !t2 }
                  },
                  exit: { opacity: 0, transition: { duration: 0.1 * !t2 } },
                  children: d2
                },
                d2
              )
            })
          }),
          e2.text.slice(r3 + d2.length)
        ]
      });
    } else
      s2 = (0, a.jsx)(
        c.PY1.span,
        {
          className: A().tint,
          "data-pending": !!e2.pending,
          initial: (!!e2.inserted || !!e2.fresh) && { opacity: 0 },
          animate: {
            opacity: 1,
            transition: {
              duration: 0.16 * !t2,
              delay: e2.inserted && !t2 ? 0.1 : 0
            }
          },
          children: e2.text
        },
        e2.fresh ?? 0
      );
    return (0, a.jsx)(l2, {
      ref: r2,
      className: A()[e2.type],
      "data-fading": !!e2.fading,
      children: s2
    });
  }
  var O = r(66558), D = r(39130), Y = r.n(D);
  let F = [
    { value: "edits", label: "Edits land" },
    { value: "error", label: "Connection drops" }
  ], q = (e2) => new Promise((t2, r2) => {
    let a2 = window.setTimeout(() => r2(Error("Connection lost")), 1100);
    e2.addEventListener(
      "abort",
      () => {
        window.clearTimeout(a2), r2(new DOMException("Aborted", "AbortError"));
      },
      { once: true }
    );
  });
  function H() {
    let [e2, t2] = (0, n.useState)("edits");
    return (0, a.jsxs)("div", {
      className: Y().demo,
      children: [
        "edits" === e2 ? (0, a.jsx)($, {}, "edits") : (0, a.jsx)(
          $,
          { blocks: w, edits: k, run: q, loop: true, simulated: true },
          "error"
        ),
        (0, a.jsx)(O.A, {
          label: "Run outcome",
          options: F,
          value: e2,
          onValueChange: t2
        })
      ]
    });
  }
  let U = H;
}

__m(__module,__exports,__require);
}