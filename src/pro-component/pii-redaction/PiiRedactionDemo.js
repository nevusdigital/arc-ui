function(__module,__exports,__require){
"use strict";
const __m = (e, a, t) => {
  "use strict";
  t.r(a), t.d(a, { PiiRedactionDemo: () => et, default: () => ei });
  var i = t(95155), n = t(12115), s = t(92171), r = t(80642), l = t(25354), o = t(18310), d = t(88359), c = t(83254), h = t(16369), p = t(71019), u = t(86104), m = t(40852), g = t(49794), f = t(92298), _ = t(35484), w = t(64962), y = t(50981), x = t(92218), b = t(51288), j = t(50680), v = t(52898), k = t(7770), N = t(67752);
  function A({ title: e2 = "Claude", ...a2 }) {
    return (0, i.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...a2,
      children: (0, i.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  let S = ["name", "email", "phone", "card"], $ = { name: "Name", email: "Email", phone: "Phone", card: "Card" }, R = { name: "NAME", email: "EMAIL", phone: "PHONE", card: "CARD" }, z = "Hi, this is Sofia Ramirez. I was charged twice for my October 24 order on the card 4539 1488 0343 6467. Could you refund the duplicate $48.00? You can reach me at sofia.ramirez@fastmail.com or +1 415 555 0132.", T = ["Sofia Ramirez"], C = "Thanks, [NAME_1]. I can see two charges of $48.00 on [CARD_1] from October 24, and the second one is a duplicate. I have started a refund, which usually lands in 3 to 5 business days. A confirmation is on its way to [EMAIL_1], and we will text [PHONE_1] if we need anything else.", E = (e2) => {
    let a2 = 0;
    for (let t2 = 0; t2 < e2.length; t2++) {
      let i2 = Number(e2[e2.length - 1 - t2]);
      t2 % 2 && (i2 *= 2) > 9 && (i2 -= 9), a2 += i2;
    }
    return a2 % 10 == 0;
  }, I = (e2) => e2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  function L(e2, a2 = {}) {
    let t2 = [], i2 = (e3, a3, i3) => {
      t2.some((e4) => a3 < e4.end && i3 > e4.start) || t2.push({ type: e3, start: a3, end: i3 });
    };
    for (let a3 of e2.matchAll(
      /[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}/g
    ))
      i2("email", a3.index, a3.index + a3[0].length);
    for (let a3 of e2.matchAll(/(?<![\d-])\d(?:[ -]?\d){12,18}(?![\d-])/g))
      E(a3[0].replace(/\D/g, "")) && i2("card", a3.index, a3.index + a3[0].length);
    for (let a3 of e2.matchAll(/(?<![\w+])\+?\(?\d[\d\s().-]{5,}\d(?![\w])/g)) {
      let e3 = a3[0].replace(/\D/g, "").length, t3 = /^\d+[.,]\d{1,2}$/.test(a3[0]) || /^\d{4}[-./]\d{1,2}[-./]\d{1,2}$|^\d{1,2}[-./]\d{1,2}[-./]\d{2,4}$/.test(
        a3[0].trim()
      );
      e3 >= 7 && e3 <= 15 && !t3 && i2("phone", a3.index, a3.index + a3[0].length);
    }
    for (let t3 of a2.names ?? [])
      if (t3.trim())
        for (let a3 of e2.matchAll(
          RegExp(`(?<![\\w])${I(t3.trim())}(?![\\w])`, "g")
        ))
          i2("name", a3.index, a3.index + a3[0].length);
    for (let a3 of e2.matchAll(
      /\b(?:I'm|I’m|I am|this is|This is|my name is|My name is)\s+([A-Z][a-z'’-]+(?:\s+[A-Z][a-z'’-]+){0,2})/g
    )) {
      let e3 = a3.index + a3[0].length - a3[1].length;
      i2("name", e3, e3 + a3[1].length);
    }
    return t2.sort((e3, a3) => e3.start - a3.start);
  }
  function M(e2, a2) {
    let t2 = {}, i2 = /* @__PURE__ */ new Map(), n2 = [], s2 = "", r2 = 0;
    for (let l2 of [...a2].sort((e3, a3) => e3.start - a3.start)) {
      if (l2.start < r2 || l2.end > e2.length || l2.end <= l2.start) continue;
      let a3 = e2.slice(l2.start, l2.end), o2 = `${l2.type}:${a3}`, d2 = i2.get(o2);
      d2 || (t2[l2.type] = (t2[l2.type] ?? 0) + 1, d2 = `${R[l2.type]}_${t2[l2.type]}`, i2.set(o2, d2)), n2.push({ ...l2, value: a3, token: d2 }), s2 += `${e2.slice(r2, l2.start)}[${d2}]`, r2 = l2.end;
    }
    return { prompt: s2 + e2.slice(r2), entities: n2 };
  }
  let W = /\[((?:NAME|EMAIL|PHONE|CARD)_\d+)\]/g;
  var P = t(86490), O = t.n(P);
  let D = (...e2) => e2.filter(Boolean).join(" "), F = { name: "Claude Sonnet 5.5" }, H = { name: d.A, email: c.A, phone: h.A, card: p.A }, B = ["redacted", "sending", "thinking", "streaming", "restoring", "done"], Y = ["scanning", "sending", "thinking", "streaming", "restoring"];
  function J(e2, a2) {
    return new Promise((t2, i2) => {
      if (a2.aborted) return i2(a2.reason);
      if (e2 <= 0) return t2();
      let n2 = window.setTimeout(() => {
        a2.removeEventListener("abort", s2), t2();
      }, e2);
      function s2() {
        window.clearTimeout(n2), i2(a2.reason);
      }
      a2.addEventListener("abort", s2, { once: true });
    });
  }
  function Z(e2) {
    let a2 = e2.match(/\s*\S+\s*/g) ?? [], t2 = [];
    for (let e3 = 0, i2 = 0; e3 < a2.length; i2++) {
      let n2 = 3 + i2 % 4;
      t2.push(a2.slice(e3, e3 + n2).join("")), e3 += n2;
    }
    return t2;
  }
  function K() {
    return (0, i.jsxs)("svg", {
      className: O().spinner,
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, i.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          stroke: "currentColor",
          strokeOpacity: ".2",
          strokeWidth: "1.75"
        }),
        (0, i.jsx)("path", {
          d: "M8 2a6 6 0 0 1 6 6",
          stroke: "currentColor",
          strokeWidth: "1.75",
          strokeLinecap: "round"
        })
      ]
    });
  }
  function G({ id: e2, reduced: a2, className: t2, children: n2 }) {
    return (0, i.jsx)("span", {
      className: D(O().swap, t2),
      children: (0, i.jsx)(r.N, {
        initial: false,
        mode: "popLayout",
        children: (0, i.jsx)(
          l.PY1.span,
          {
            className: O().swapItem,
            initial: { opacity: 0, y: 2 * !a2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                duration: a2 ? 0 : k.T.duration.fast,
                ease: [...k.T.ease.standard]
              }
            },
            exit: {
              opacity: 0,
              transition: { duration: 0.1 * !a2, ease: "easeOut" }
            },
            children: n2
          },
          e2
        )
      })
    });
  }
  function U({ text: e2, entities: a2 }) {
    let t2 = new Map(a2.map((e3) => [e3.token, e3.type])), n2 = [], s2 = 0;
    for (let a3 of e2.matchAll(W)) {
      a3.index > s2 && n2.push(e2.slice(s2, a3.index));
      let r2 = t2.get(a3[1]);
      n2.push(
        (0, i.jsx)(
          "span",
          { className: O().token, "data-type": r2, children: a3[0] },
          a3.index
        )
      ), s2 = a3.index + a3[0].length;
    }
    return s2 < e2.length && n2.push(e2.slice(s2)), (0, i.jsx)(i.Fragment, { children: n2 });
  }
  function V({ text: e2, entities: a2, hits: t2, label: n2 }) {
    let s2 = [], r2 = 0;
    return a2.forEach((a3, l2) => {
      a3.start > r2 && s2.push(e2.slice(r2, a3.start)), s2.push(
        (0, i.jsx)(
          "mark",
          {
            className: O().mark,
            "data-type": a3.type,
            "data-hit": l2 < t2 || void 0,
            "aria-label": n2?.(a3),
            children: e2.slice(a3.start, a3.end)
          },
          a3.start
        )
      ), r2 = a3.end;
    }), r2 < e2.length && s2.push(e2.slice(r2)), (0, i.jsx)(i.Fragment, { children: s2 });
  }
  function X({ raw: e2, entities: a2 }) {
    let t2 = new Map(a2.map((e3) => [e3.token, e3])), n2 = [], s2 = 0;
    for (let a3 of e2.matchAll(W)) {
      let r2 = t2.get(a3[1]);
      a3.index > s2 && n2.push(e2.slice(s2, a3.index)), n2.push(
        r2 ? (0, i.jsx)(
          "mark",
          {
            className: O().mark,
            "data-type": r2.type,
            "data-hit": "",
            children: r2.value
          },
          a3.index
        ) : a3[0]
      ), s2 = a3.index + a3[0].length;
    }
    return s2 < e2.length && n2.push(e2.slice(s2)), (0, i.jsx)(i.Fragment, { children: n2 });
  }
  function q({ pulse: e2, active: a2, reduced: t2 }) {
    return (0, i.jsxs)("span", {
      className: O().leg,
      "data-active": a2 || void 0,
      "aria-hidden": "true",
      children: [
        (0, i.jsx)("span", { className: O().legLine }),
        e2 && !t2 ? (0, i.jsx)(
          l.PY1.span,
          {
            className: O().legTrack,
            initial: { x: e2.dir > 0 ? "0%" : "100%" },
            animate: { x: e2.dir > 0 ? "100%" : "0%" },
            transition: { duration: 0.46, ease: [...k.T.ease.inOut] },
            children: (0, i.jsx)(l.PY1.span, {
              className: O().dot,
              initial: { opacity: 0 },
              animate: { opacity: [0, 1, 1, 0] },
              transition: {
                duration: 0.46,
                times: [0, 0.12, 0.86, 1],
                ease: "linear"
              }
            })
          },
          e2.key
        ) : null
      ]
    });
  }
  function Q({
    defaultMessage: e2 = z,
    editable: a2 = true,
    names: t2 = T,
    detect: d2,
    send: c2,
    model: h2 = F,
    autoPlay: p2 = true,
    showOriginal: R2,
    defaultShowOriginal: E2 = false,
    onShowOriginalChange: I2,
    onRedact: P2,
    onReply: ee2,
    onPhaseChange: ea2,
    className: et2
  }) {
    let ei2, en, es = (0, o.I)() ?? false, er = (0, n.useId)(), el = (0, n.useRef)(null), eo = (0, n.useRef)(null), ed = (0, n.useRef)(null), ec = (0, n.useRef)(null), eh = (0, n.useRef)(0), [ep, eu] = (0, n.useState)(e2), [em, eg] = (0, n.useState)("idle"), [ef, e_] = (0, n.useState)(null), [ew, ey] = (0, n.useState)(0), [ex, eb] = (0, n.useState)(null), [ej, ev] = (0, n.useState)(0), [ek, eN] = (0, n.useState)(null), [eA, eS] = (0, n.useState)(null), [e$, eR] = (0, n.useState)(""), [ez, eT] = (0, n.useState)(p2), [eC, eE] = (0, n.useState)(false), [eI, eL] = (0, n.useState)(E2), eM = R2 ?? eI, eW = ef && ef.source === ep ? ef : null, eP = !!eW && (B.includes(em) || "error" === em && eA?.at === "send"), eO = Y.includes(em), eD = h2.name.split(" ")[0] || "the model", eF = h2.mark ?? (0, i.jsx)(A, {
      width: 16,
      height: 16,
      title: "",
      "aria-hidden": "true",
      className: O().claude
    }), eH = eW?.entities.length ?? 0, eB = (e10) => {
      eg(e10), ea2?.(e10);
    }, eY = (e10, a3) => eN({ leg: e10, dir: a3, key: ++eh.current }), eJ = () => {
      ec.current?.abort();
      let e10 = new AbortController();
      return ec.current = e10, e10.signal;
    }, eZ = (e10, a3, t3) => {
      t3.aborted || (eS({
        at: e10,
        message: a3 instanceof Error && a3.message ? a3.message : "scan" === e10 ? "The scan failed" : "The model did not answer"
      }), eB("error"), eT(false));
    }, eK = (0, n.useMemo)(
      () => c2 || e2 !== z ? null : { raw: C, entities: M(z, L(z, { names: T })).entities },
      [c2, e2]
    ), eG = (0, n.useMemo)(() => Z(ex?.raw ?? ""), [ex]);
    async function eU() {
      let e10 = eJ();
      eR(""), eS(null), ey(0), ev(0), eb(null), eB("scanning"), eY(0, 1);
      try {
        let [a3] = await Promise.all([
          Promise.resolve(d2 ? d2(ep, e10) : L(ep, { names: t2 })),
          J(380 * !es, e10)
        ]), i2 = { ...M(ep, a3), source: ep };
        e_(i2);
        for (let a4 = 1; a4 <= i2.entities.length; a4++)
          ey(a4), await J(120 * !es, e10);
        await J(200 * !es, e10), eB("redacted"), P2?.({ prompt: i2.prompt, entities: i2.entities });
      } catch (a3) {
        eZ("scan", a3, e10);
      }
    }
    async function eV() {
      if (!eW) return;
      let e10 = eJ();
      eR(""), eS(null), ev(0), eb(null), eB("sending"), eY(1, 1);
      try {
        var a3;
        let t3;
        await J(460 * !es, e10), eB("thinking");
        let i2 = c2 ? await c2(eW.prompt, e10) : (await J(700 * !es, e10), (function(e11, a4) {
          if (e11 === M(z, L(z, { names: T })).prompt) return C;
          let t4 = (e12) => a4.find((a5) => a5.type === e12)?.token, i3 = t4("name"), n3 = t4("card"), s3 = t4("email"), r2 = t4("phone");
          if (!a4.length)
            return "Thanks for the message. I did not find any personal details in it, so it reached me exactly as you wrote it. How can I help?";
          let l2 = [i3 ? `Thanks, [${i3}].` : "Thanks for the details."];
          return n3 && l2.push(
            `I have flagged the latest charge on [${n3}] for review.`
          ), s3 && r2 ? l2.push(
            `I will send a summary to [${s3}] and text [${r2}] if anything changes.`
          ) : s3 ? l2.push(`I will send a summary to [${s3}] within the hour.`) : r2 && l2.push(`I will text [${r2}] if anything changes.`), n3 || s3 || r2 || l2.push("What can I help you with today?"), l2.join(" ");
        })(eW.prompt, eW.entities));
        if (e10.aborted) return;
        let n2 = (a3 = eW.entities, t3 = new Map(a3.map((e11) => [e11.token, e11.value])), i2.replace(W, (e11, a4) => t3.get(a4) ?? e11)), s2 = Z(i2);
        if (eb({ raw: i2, restored: n2 }), eB("streaming"), eY(1, -1), es)
          ev(s2.length);
        else for (let a4 = 1; a4 <= s2.length; a4++) ev(a4), await J(34, e10);
        await J(240 * !es, e10), eB("restoring"), eY(0, -1), await J(460 * !es, e10), eB("done"), ee2?.({ raw: i2, restored: n2 });
      } catch (a4) {
        eZ("send", a4, e10);
      }
    }
    function eX(e10) {
      ec.current?.abort(), ey(0), eS(null), eR(""), eN(null), eB("idle"), e10 && a2 && requestAnimationFrame(() => eo.current?.focus());
    }
    let eq = (0, n.useRef)({ scan: eU, deliver: eV, reset: eX });
    (0, n.useLayoutEffect)(() => {
      eq.current = { scan: eU, deliver: eV, reset: eX };
    }), (0, n.useEffect)(() => {
      let e10 = el.current;
      if (!e10 || "u" < typeof IntersectionObserver) return void eE(true);
      let a3 = new IntersectionObserver(([e11]) => eE(e11.isIntersecting), {
        threshold: 0.25
      });
      return a3.observe(e10), () => a3.disconnect();
    }, []), (0, n.useEffect)(() => {
      if (!ez || !eC || es) return;
      let e10 = "idle" === em ? 900 : "redacted" === em ? 620 : 2800 * ("done" === em);
      if (!e10) return;
      let a3 = window.setTimeout(() => {
        "idle" === em ? eq.current.scan() : "redacted" === em ? eq.current.deliver() : eq.current.reset(false);
      }, e10);
      return () => window.clearTimeout(a3);
    }, [ez, eC, es, em]), (0, n.useEffect)(() => () => ec.current?.abort(), []);
    let eQ = () => eT(false), e0 = "idle" === em ? {
      key: "scan",
      label: "Scan",
      icon: (0, i.jsx)(u.A, {
        size: 16,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      }),
      accent: true,
      disabled: !ep.trim()
    } : eO ? {
      key: "stop",
      label: "Stop",
      icon: (0, i.jsx)(m.A, {
        size: 12,
        strokeWidth: 2,
        fill: "currentColor",
        "aria-hidden": "true"
      }),
      accent: false,
      disabled: false
    } : "redacted" === em ? {
      key: "send",
      label: "Send",
      icon: (0, i.jsx)(g.A, {
        size: 16,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      }),
      accent: true,
      disabled: false
    } : "error" === em ? {
      key: "retry",
      label: "Retry",
      icon: (0, i.jsx)(f.A, {
        size: 16,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      }),
      accent: true,
      disabled: false
    } : {
      key: "again",
      label: "Run again",
      icon: (0, i.jsx)(f.A, {
        size: 16,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      }),
      accent: false,
      disabled: false
    }, e1 = "redacted" === em || "done" === em || "error" === em, e22 = "scanning" === em ? {
      key: "scanning",
      icon: (0, i.jsx)(K, {}),
      label: "Scanning for personal data",
      shimmer: true
    } : "redacted" === em ? e$ ? {
      key: "stopped",
      icon: (0, i.jsx)(_.A, { size: 16, strokeWidth: 1.75 }),
      label: e$
    } : {
      key: "redacted",
      icon: (0, i.jsx)(w.A, { size: 16, strokeWidth: 1.75 }),
      label: eH ? `${eH} item${1 === eH ? "" : "s"} redacted` : "No personal data found",
      tone: "success"
    } : "sending" === em ? {
      key: "sending",
      icon: (0, i.jsx)(K, {}),
      label: "Sending the safe prompt",
      shimmer: true
    } : "thinking" === em ? {
      key: "thinking",
      icon: (0, i.jsx)(K, {}),
      label: `Waiting for ${eD}`,
      shimmer: true
    } : "streaming" === em ? {
      key: "streaming",
      icon: (0, i.jsx)(K, {}),
      label: "Receiving the reply",
      shimmer: true
    } : "restoring" === em ? {
      key: "restoring",
      icon: (0, i.jsx)(K, {}),
      label: "Restoring your details",
      shimmer: true
    } : "done" === em ? {
      key: "done",
      icon: (0, i.jsx)(w.A, {
        size: 16,
        strokeWidth: 1.75
      }),
      label: eH ? "Reply restored" : "Reply received",
      tone: "success"
    } : "error" === em ? {
      key: "error",
      icon: (0, i.jsx)(_.A, {
        size: 16,
        strokeWidth: 1.75
      }),
      label: eA?.message || "Something went wrong",
      tone: "danger"
    } : e$ ? {
      key: "notice",
      icon: (0, i.jsx)(_.A, {
        size: 16,
        strokeWidth: 1.75
      }),
      label: e$
    } : {
      key: "idle",
      icon: (0, i.jsx)(y.A, {
        size: 16,
        strokeWidth: 1.75
      }),
      label: ep.trim() ? "Ready to scan" : "Add a message to scan"
    }, e6 = !c2 && ("done" === em || "streaming" === em || "restoring" === em), e5 = `${e22.label}.${e6 ? " Simulated, nothing was sent." : ""}`, e4 = eP ? eM ? "Original message" : "Safe prompt" : "Message", e7 = !eP || eM, e3 = "streaming" === em ? "stream" : "restoring" === em || "done" === em ? "restored" : "empty", e8 = ex ? { raw: ex.raw, entities: eW?.entities ?? [] } : eK, { outer: e9, inner: ae } = (ei2 = (0, n.useRef)(null), en = (0, n.useRef)(null), (0, n.useEffect)(() => {
      let e10, a3 = ei2.current, t3 = en.current;
      if (!a3 || !t3 || "u" < typeof ResizeObserver) return;
      let i2 = t3.offsetHeight, n2 = t3.offsetWidth, r2 = () => {
        a3.style.height = "", a3.style.overflow = "", e10 = void 0;
      }, l2 = new ResizeObserver(() => {
        let l3 = t3.offsetHeight, o2 = t3.offsetWidth, d3 = o2 !== n2;
        if (n2 = o2, l3 === i2) return;
        let c3 = e10 ? a3.getBoundingClientRect().height : i2;
        (i2 = l3, e10?.stop(), es || d3) ? r2() : (a3.style.overflow = "hidden", e10 = (0, s.i)(
          a3,
          { height: [c3, l3] },
          {
            type: "spring",
            visualDuration: 0.24,
            bounce: 0,
            onComplete: r2
          }
        ));
      });
      return l2.observe(t3), () => {
        l2.disconnect(), e10?.stop();
      };
    }, [es]), { outer: ei2, inner: en }), aa = "scanning" === em || "restoring" === em, at = "thinking" === em || "streaming" === em;
    return (0, i.jsxs)("div", {
      ref: el,
      className: D(O().root, et2),
      "data-phase": em,
      children: [
        (0, i.jsxs)("section", {
          className: O().section,
          "aria-label": e4,
          children: [
            (0, i.jsxs)("div", {
              className: O().head,
              children: [
                (0, i.jsx)(G, {
                  id: e4,
                  reduced: es,
                  className: O().label,
                  children: (0, i.jsx)("span", {
                    "aria-hidden": "true",
                    children: e4
                  })
                }),
                (0, i.jsxs)("span", {
                  className: O().toggle,
                  children: [
                    (0, i.jsx)("label", {
                      htmlFor: `${er}-original`,
                      className: O().toggleLabel,
                      "data-disabled": !eP || void 0,
                      children: "Show original"
                    }),
                    (0, i.jsx)(j.d, {
                      id: `${er}-original`,
                      className: O().switch,
                      checked: eM,
                      disabled: !eP,
                      onCheckedChange: (e10) => {
                        eQ(), void 0 === R2 && eL(e10), I2?.(e10);
                      }
                    })
                  ]
                })
              ]
            }),
            (0, i.jsx)("div", {
              className: O().well,
              children: (0, i.jsxs)("div", {
                className: O().stack,
                children: [
                  (0, i.jsxs)("p", {
                    className: O().layer,
                    "data-on": e7 || void 0,
                    "data-editing": "idle" === em && a2 || void 0,
                    "aria-hidden": !e7 || "idle" === em && a2 || void 0,
                    children: [
                      eW ? (0, i.jsx)(V, {
                        text: ep,
                        entities: eW.entities,
                        hits: "idle" === em ? 0 : eP ? eH : ew,
                        label: (e10) => `${$[e10.type]}, redacted as ${e10.token}`
                      }) : ep,
                      "\u200B"
                    ]
                  }),
                  eW ? (0, i.jsx)("p", {
                    className: O().layer,
                    "data-on": !e7 || void 0,
                    "aria-hidden": e7 || void 0,
                    children: (0, i.jsx)(U, {
                      text: eW.prompt,
                      entities: eW.entities
                    })
                  }) : null,
                  "idle" === em && a2 ? (0, i.jsx)("textarea", {
                    ref: eo,
                    className: O().field,
                    value: ep,
                    spellCheck: false,
                    rows: 1,
                    "aria-label": "Message to check for personal data",
                    placeholder: "Paste a message with a name, email, phone number or card",
                    onChange: (e10) => {
                      eQ(), eu(e10.target.value), eR("");
                    },
                    onFocus: eQ,
                    onKeyDown: (e10) => {
                      "Enter" === e10.key && (e10.metaKey || e10.ctrlKey) && ep.trim() && (e10.preventDefault(), eU(), requestAnimationFrame(() => ed.current?.focus()));
                    }
                  }) : null
                ]
              })
            }),
            (0, i.jsx)("ul", {
              className: O().types,
              "aria-label": "Detected entities",
              children: S.map((e10) => {
                let a3 = H[e10], t3 = [
                  ...new Set(
                    (eW ? eW.entities.filter(
                      (a4, t4) => a4.type === e10 && (eP || t4 < ew)
                    ) : []).map((e11) => e11.token)
                  )
                ], n2 = eP || "scanning" === em && !!eW && ew >= eW.entities.length, s2 = "idle" !== em && (eW || "scanning" === em) ? t3.length ? "found" : n2 ? "none" : "scanning" === em ? "checking" : "idle" : "idle", r2 = "found" === s2 ? `[${t3[0]}]${t3.length > 1 ? ` +${t3.length - 1}` : ""}` : "none" === s2 ? "None found" : "checking" === s2 ? "Checking" : "Not scanned";
                return (0, i.jsxs)(
                  "li",
                  {
                    className: O().type,
                    "data-type": e10,
                    "data-state": s2,
                    children: [
                      (0, i.jsx)(a3, {
                        size: 14,
                        strokeWidth: 1.75,
                        className: O().typeIcon,
                        "aria-hidden": "true"
                      }),
                      (0, i.jsx)("span", {
                        className: O().typeLabel,
                        children: $[e10]
                      }),
                      (0, i.jsx)(G, {
                        id: `${s2}:${r2}`,
                        reduced: es,
                        className: O().typeDetail,
                        children: "checking" === s2 ? (0, i.jsx)(v.n, { children: r2 }) : (0, i.jsx)("span", {
                          className: "found" === s2 ? O().typeToken : void 0,
                          children: r2
                        })
                      })
                    ]
                  },
                  e10
                );
              })
            })
          ]
        }),
        (0, i.jsxs)("div", {
          className: O().flow,
          "aria-hidden": "true",
          children: [
            (0, i.jsxs)("span", {
              className: O().node,
              "data-active": "done" === em || void 0,
              children: [
                (0, i.jsx)(x.e, {
                  name: "Sofia Ramirez",
                  src: (0, N.my)("sofia-ramirez"),
                  size: "sm",
                  className: O().avatar
                }),
                (0, i.jsx)("span", {
                  className: O().nodeLabel,
                  children: "You"
                })
              ]
            }),
            (0, i.jsx)(q, {
              pulse: ek?.leg === 0 ? ek : null,
              active: "scanning" === em || "restoring" === em,
              reduced: es
            }),
            (0, i.jsxs)("span", {
              className: O().node,
              "data-active": aa || void 0,
              children: [
                (0, i.jsx)(y.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  className: O().guardIcon,
                  "data-on": eP || void 0
                }),
                (0, i.jsx)(v.n, {
                  active: aa,
                  className: O().nodeLabel,
                  children: "PII guard"
                })
              ]
            }),
            (0, i.jsx)(q, {
              pulse: ek?.leg === 1 ? ek : null,
              active: "sending" === em || "streaming" === em,
              reduced: es
            }),
            (0, i.jsxs)("span", {
              className: O().node,
              "data-active": at || void 0,
              children: [
                (0, i.jsx)("span", { className: O().nodeMark, children: eF }),
                (0, i.jsx)(v.n, {
                  active: at,
                  className: D(O().nodeLabel, O().modelName),
                  children: h2.name
                })
              ]
            })
          ]
        }),
        (0, i.jsxs)("section", {
          className: O().section,
          "aria-labelledby": `${er}-reply`,
          children: [
            (0, i.jsxs)("div", {
              className: O().head,
              children: [
                (0, i.jsxs)("span", {
                  className: O().label,
                  children: [
                    (0, i.jsx)("span", {
                      className: O().replyMark,
                      "aria-hidden": "true",
                      children: eF
                    }),
                    (0, i.jsxs)("span", {
                      id: `${er}-reply`,
                      children: ["Reply from ", h2.name]
                    })
                  ]
                }),
                (0, i.jsx)(G, {
                  id: e3,
                  reduced: es,
                  className: O().replyMeta,
                  children: "restored" === e3 ? (0, i.jsxs)("span", {
                    className: O().replyRestored,
                    children: [
                      (0, i.jsx)(w.A, {
                        size: 14,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Restored"
                    ]
                  }) : "stream" === e3 ? (0, i.jsx)("span", { children: "With placeholders" }) : (0, i.jsx)("span", {})
                })
              ]
            }),
            (0, i.jsx)("div", {
              ref: e9,
              className: O().wellClip,
              children: (0, i.jsx)("div", {
                ref: ae,
                className: D(O().well, O().replyWell),
                children: (0, i.jsxs)("div", {
                  className: O().stack,
                  children: [
                    (0, i.jsx)("p", {
                      className: D(O().layer, O().placeholder),
                      "data-on": "empty" === e3 || void 0,
                      "aria-hidden": "empty" !== e3 || void 0,
                      children: (0, i.jsx)(G, {
                        id: "thinking" === em ? "thinking" : "error" === em && eA?.at === "send" ? "error" : "empty",
                        reduced: es,
                        children: "thinking" === em ? (0, i.jsx)(v.n, {
                          className: O().thinking,
                          children: "Thinking"
                        }) : "error" === em && eA?.at === "send" ? (0, i.jsx)("span", {
                          children: "No reply. Nothing was shown to the person."
                        }) : (0, i.jsx)("span", {
                          children: "The reply shows here, with your details put back."
                        })
                      })
                    }),
                    ex ? (0, i.jsx)("p", {
                      className: O().layer,
                      "data-on": "stream" === e3 || void 0,
                      "aria-hidden": "stream" !== e3 || void 0,
                      children: eG.slice(0, ej).map(
                        (e10, a3) => (0, i.jsx)(
                          l.PY1.span,
                          {
                            initial: !es && { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: {
                              duration: 0.14,
                              ease: "easeOut"
                            },
                            children: (0, i.jsx)(U, {
                              text: e10,
                              entities: eW?.entities ?? []
                            })
                          },
                          a3
                        )
                      )
                    }) : null,
                    e8 ? (0, i.jsx)("p", {
                      className: O().layer,
                      "data-on": "restored" === e3 && !!ex || void 0,
                      "aria-hidden": "restored" !== e3 || !ex || void 0,
                      children: (0, i.jsx)(X, {
                        raw: e8.raw,
                        entities: e8.entities
                      })
                    }) : null
                  ]
                })
              })
            })
          ]
        }),
        (0, i.jsxs)("div", {
          className: O().footer,
          children: [
            (0, i.jsx)("span", {
              className: O().status,
              "data-tone": e22.tone,
              children: (0, i.jsxs)(G, {
                id: e22.key + e22.label,
                reduced: es,
                className: O().statusSwap,
                children: [
                  (0, i.jsx)("span", {
                    className: O().statusIcon,
                    "aria-hidden": "true",
                    children: e22.icon
                  }),
                  (0, i.jsx)(v.n, {
                    active: !!e22.shimmer,
                    className: O().statusLabel,
                    children: e22.label
                  }),
                  e6 && "done" === em ? (0, i.jsx)("span", {
                    className: O().simulated,
                    children: "Simulated"
                  }) : null
                ]
              })
            }),
            (0, i.jsx)("span", {
              className: O().srOnly,
              role: "status",
              "aria-live": "polite",
              children: e5
            }),
            (0, i.jsxs)("span", {
              className: O().actions,
              children: [
                (0, i.jsx)(r.N, {
                  initial: false,
                  mode: "popLayout",
                  children: e1 ? (0, i.jsx)(
                    l.PY1.span,
                    {
                      className: O().resetSlot,
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: {
                        duration: es ? 0 : k.T.duration.instant
                      },
                      children: (0, i.jsx)(b.$, {
                        variant: "ghost",
                        size: "sm",
                        className: O().action,
                        onClick: () => {
                          eQ(), eX(true);
                        },
                        children: "Reset"
                      })
                    },
                    "reset"
                  ) : null
                }),
                (0, i.jsxs)(b.$, {
                  ref: ed,
                  variant: e0.accent ? "primary" : "secondary",
                  size: "sm",
                  className: D(O().action, e0.accent && O().accent),
                  disabled: e0.disabled,
                  onClick: () => {
                    eQ(), "idle" === em || "done" === em ? eU() : eO ? (ec.current?.abort(), eN(null), "scanning" === em ? (ey(0), eB("idle"), eR("Scan stopped")) : (eB("redacted"), eR("Stopped. No reply was shown"))) : "redacted" === em ? eV() : "error" === em && (eA?.at === "send" && eW ? eV() : eU());
                  },
                  children: [e0.icon, e0.label]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  var ee = t(65790), ea = t.n(ee);
  function et() {
    return (0, i.jsx)("div", {
      className: ea().demo,
      children: (0, i.jsx)(Q, {})
    });
  }
  let ei = et;
};

__m(__module,__exports,__require);
}