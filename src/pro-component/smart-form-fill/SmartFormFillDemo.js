function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { SmartFormFillDemo: () => G, default: () => Y });
  var r = a(95155), n = a(12115), i = a(18310), l = a(80642), s = a(25354), o = a(64962), c = a(35484), d = a(94890), m = a(40852), u = a(58081), f = a(22350), h = a(64577), p = a(92298), g = a(51288), y = a(76266), v = a(52898);
  let x = [
    {
      id: "name",
      label: "Full name",
      placeholder: "Ada Lovelace",
      autoComplete: "name"
    },
    {
      id: "title",
      label: "Job title",
      placeholder: "Head of partnerships",
      autoComplete: "organization-title"
    },
    {
      id: "company",
      label: "Company",
      kind: "company",
      placeholder: "Company name",
      span: 2,
      autoComplete: "organization"
    },
    {
      id: "email",
      label: "Email",
      kind: "email",
      placeholder: "name@company.com",
      autoComplete: "email"
    },
    {
      id: "phone",
      label: "Phone",
      kind: "tel",
      placeholder: "+1 (555) 000-0000",
      autoComplete: "tel"
    },
    {
      id: "address",
      label: "Address",
      kind: "address",
      placeholder: "Street, city, region, postcode",
      span: 2,
      autoComplete: "street-address"
    }
  ], b = `Thanks again for the walkthrough on Tuesday. Redlines coming by Friday.

Maya Okafor
Head of Partnerships, Stripe
m +1 (415) 555-0142 \xB7 o +1 (415) 555-0100
maya.okafor@stripe.com
354 Oyster Pt Blvd, S. San Francisco 94080`, _ = `fwd from Jonas: met Priya Raman at Config last week,
she runs design eng at linear. priya@linear.app
cell is 628 555 0199, wants a follow up call
office near 1 Letterman Dr SF? not 100% sure`, w = [
    { label: "Email signature", text: b },
    { label: "Messy note", text: _ }
  ], k = {
    [b]: {
      name: { value: "Maya Okafor", confidence: 0.99, source: "Maya Okafor" },
      title: {
        value: "Head of Partnerships",
        confidence: 0.97,
        source: "Head of Partnerships"
      },
      company: { value: "Stripe", confidence: 0.98, source: "Stripe" },
      email: {
        value: "maya.okafor@stripe.com",
        confidence: 0.99,
        source: "maya.okafor@stripe.com"
      },
      phone: {
        value: "+1 (415) 555-0142",
        confidence: 0.72,
        source: "+1 (415) 555-0142",
        note: "Two numbers found, picked the mobile one"
      },
      address: {
        value: "354 Oyster Point Blvd, South San Francisco, CA 94080",
        confidence: 0.68,
        source: "354 Oyster Pt Blvd, S. San Francisco 94080",
        note: "Expanded abbreviations and added the state"
      }
    },
    [_]: {
      name: { value: "Priya Raman", confidence: 0.96, source: "Priya Raman" },
      title: {
        value: "Design Engineering Lead",
        confidence: 0.66,
        source: "runs design eng",
        note: "Paraphrased from \u201Cruns design eng\u201D"
      },
      company: { value: "Linear", confidence: 0.94, source: "linear" },
      email: {
        value: "priya@linear.app",
        confidence: 0.99,
        source: "priya@linear.app"
      },
      phone: {
        value: "+1 (628) 555-0199",
        confidence: 0.9,
        source: "628 555 0199"
      },
      address: {
        value: "1 Letterman Drive, San Francisco, CA 94129",
        confidence: 0.48,
        source: "1 Letterman Dr SF",
        note: "The note itself says it is not sure"
      }
    }
  }, j = /^(gmail|googlemail|outlook|hotmail|yahoo|icloud|me|proton|protonmail|aol|gmx|hey)$/i, E = /\b(head|director|manager|engineer|designer|founder|co-?founder|ceo|cto|coo|cfo|vp|vice president|lead|partner|analyst|consultant|recruiter|developer|architect|officer|president|specialist|scientist|marketing|sales|product|operations)\b/i, C = /\b(st|street|ave|avenue|blvd|boulevard|rd|road|dr|drive|way|lane|ln|ct|court|pl|place|sq|square|pkwy|parkway|hwy|ctr|center|strasse|straße|gasse|weg|platz)\b\.?/i;
  function N(e2) {
    return e2.replace(/\D/g, "");
  }
  async function A(e2, t2) {
    return await new Promise((e3, a2) => {
      if (t2.aborted) return a2(t2.reason);
      let r2 = setTimeout(e3, 720);
      t2.addEventListener(
        "abort",
        () => {
          clearTimeout(r2), a2(t2.reason);
        },
        { once: true }
      );
    }), k[e2.trim()] ?? k[e2] ?? (function(e3) {
      let t3 = {}, a2 = e3.split(/\r?\n/).map((e4) => e4.trim()).filter(Boolean), r2 = e3.match(/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/);
      r2 && (t3.email = {
        value: r2[0].toLowerCase(),
        confidence: 0.98,
        source: r2[0]
      });
      let n2 = [
        ...e3.matchAll(
          /(?:\+?\d{1,3}[\s.-]?)?\(?\d{2,4}\)?[\s.-]?\d{3}[\s.-]?\d{3,4}/g
        )
      ].filter((e4) => N(e4[0]).length >= 9);
      if (n2.length) {
        var i2;
        let a3, r3 = n2.find(
          (t4) => /\b(m|mob|mobile|cell|c)\b[\s.:]*$/i.test(
            e3.slice(Math.max(0, (t4.index ?? 0) - 10), t4.index)
          )
        ), l3 = r3 ?? n2[0], s3 = n2.length > 1;
        t3.phone = {
          value: 10 === (a3 = N(i2 = l3[0])).length ? `+1 (${a3.slice(0, 3)}) ${a3.slice(3, 6)}-${a3.slice(6)}` : 11 === a3.length && a3.startsWith("1") ? `+1 (${a3.slice(1, 4)}) ${a3.slice(4, 7)}-${a3.slice(7)}` : i2.trim(),
          confidence: s3 ? 0.72 : 0.92,
          source: l3[0].trim(),
          note: s3 ? `${n2.length} numbers found, picked ${r3 ? "the mobile one" : "the first"}` : void 0
        };
      }
      let l2 = a2.find(
        (e4) => /^[A-Z][a-z'-]+(?: [A-Z][a-z'-]+){1,2}$/.test(e4) && !E.test(e4)
      );
      l2 && (t3.name = { value: l2, confidence: 0.9, source: l2 });
      let s2 = a2.find(
        (e4) => E.test(e4) && e4 !== l2 && !e4.includes("@") && e4.length < 80
      );
      if (s2) {
        let [e4, a3] = s2.split(/\s*(?:,|\||\bat\b|@|·|–|-)\s+/);
        e4 && (t3.title = {
          value: e4.trim(),
          confidence: 0.86,
          source: e4.trim()
        }), a3 && /^[A-Z]/.test(a3) && (t3.company = {
          value: a3.trim(),
          confidence: 0.9,
          source: a3.trim()
        });
      }
      if (!t3.company && r2) {
        let e4 = r2[0].split("@")[1].split(".")[0];
        j.test(e4) || (t3.company = {
          value: e4.charAt(0).toUpperCase() + e4.slice(1),
          confidence: 0.74,
          source: e4,
          note: "Guessed from the email domain"
        });
      }
      let o2 = a2.find((e4) => /^\d+\s/.test(e4) && C.test(e4)) ?? a2.find(
        (e4) => /\b\d{5}(?:-\d{4})?\b/.test(e4) && !/@/.test(e4) && N(e4).length < 9
      );
      if (o2) {
        let e4 = /\b\d{4,5}\b/.test(o2.replace(/^\d+/, ""));
        t3.address = {
          value: o2,
          confidence: e4 ? 0.84 : 0.7,
          source: o2,
          note: e4 ? void 0 : "No postcode in the text"
        };
      }
      return t3;
    })(e2);
  }
  let $ = (e2, t2) => function({ size: a2 = 16, ...n2 }) {
    return (0, r.jsx)("svg", {
      viewBox: e2,
      width: a2,
      height: a2,
      "aria-hidden": "true",
      focusable: "false",
      ...n2,
      children: t2
    });
  }, S = $(
    "0 0 24 24",
    (0, r.jsx)("path", {
      fill: "#D97757",
      d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
    })
  ), T = $(
    "0 0 24 24",
    (0, r.jsx)("path", {
      fill: "#635BFF",
      d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
    })
  ), L = $(
    "0 0 24 24",
    (0, r.jsx)("path", {
      fill: "#5E6AD2",
      d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
    })
  ), z = $(
    "0 0 24 24",
    (0, r.jsx)("path", { fill: "currentColor", d: "m12 1.608 12 20.784H0Z" })
  ), M = $(
    "0 0 38 57",
    (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)("path", {
          fill: "#1ABCFE",
          d: "M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
        }),
        (0, r.jsx)("path", {
          fill: "#0ACF83",
          d: "M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
        }),
        (0, r.jsx)("path", {
          fill: "#FF7262",
          d: "M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"
        }),
        (0, r.jsx)("path", {
          fill: "#F24E1E",
          d: "M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
        }),
        (0, r.jsx)("path", {
          fill: "#A259FF",
          d: "M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
        })
      ]
    })
  ), P = $(
    "0 0 24 24",
    (0, r.jsx)("path", {
      fill: "currentColor",
      d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
    })
  ), F = {
    stripe: (e2) => (0, r.jsx)(T, { size: e2 }),
    linear: (e2) => (0, r.jsx)(L, { size: e2 }),
    vercel: (e2) => (0, r.jsx)(z, { size: e2 }),
    figma: (e2) => (0, r.jsx)(M, { size: e2 }),
    notion: (e2) => (0, r.jsx)(P, { size: e2 })
  };
  var R = a(12230), B = a.n(R);
  let D = (...e2) => e2.filter(Boolean).join(" "), I = { name: "Claude Haiku 5.5", mark: (0, r.jsx)(S, { size: 14 }) }, O = { duration: 0.16, ease: [0.22, 1, 0.36, 1] }, H = { duration: 0.1, ease: [0.22, 1, 0.36, 1] }, K = (e2) => e2.length <= 1 ? e2.join("") : `${e2.slice(0, -1).join(", ")} and ${e2[e2.length - 1]}`, U = (e2) => e2.split(/\r?\n/).filter((e3) => e3.trim()).length;
  function W({ id: e2, children: t2, className: a2 }) {
    let n2 = (0, i.I)();
    return (0, r.jsx)("span", {
      className: D(B().swap, a2),
      children: (0, r.jsx)(l.N, {
        initial: false,
        children: (0, r.jsx)(
          s.PY1.span,
          {
            className: B().swapItem,
            initial: n2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: { opacity: 1, y: 0, transition: O },
            exit: { opacity: 0, transition: H },
            children: t2
          },
          e2
        )
      })
    });
  }
  function V({
    fields: e2 = x,
    defaultValues: t2,
    onValuesChange: a2,
    extract: b2,
    reviewThreshold: _2 = 0.8,
    samples: k2 = w,
    autoPlay: j2,
    onFill: E2,
    onUndo: C2,
    onSubmit: N2,
    resolveLogo: $2,
    model: T2 = I,
    title: L2 = "New contact",
    description: z2 = "Paste a signature, an email or rough notes. AI fills the fields and flags anything to check.",
    submitLabel: M2 = "Save contact",
    className: P2
  }) {
    let R2 = (0, n.useId)(), Z2 = (0, i.I)() ?? false, q2 = !b2, G2 = b2 ?? A, Y2 = (0, n.useMemo)(() => e2.map((e3) => e3.id), [e2]), J = (0, n.useCallback)((t3) => e2.find((e3) => e3.id === t3)?.label ?? t3, [e2]), [Q, X] = (0, n.useState)(""), [ee, et] = (0, n.useState)("edit"), [ea, er] = (0, n.useState)("idle"), [en, ei] = (0, n.useState)(
      () => Object.fromEntries(e2.map((e3) => [e3.id, t2?.[e3.id] ?? ""]))
    ), [el, es] = (0, n.useState)({}), [eo, ec] = (0, n.useState)({}), [ed, em] = (0, n.useState)({ id: null, done: 0, total: 0 }), [eu, ef] = (0, n.useState)(null), [eh, ep] = (0, n.useState)(null), [eg, ey] = (0, n.useState)({
      text: "Paste text to fill the form",
      tone: "neutral"
    }), [ev, ex] = (0, n.useState)(false), [eb, e_] = (0, n.useState)(0), ew = (0, n.useRef)(null), ek = (0, n.useRef)(null), ej = (0, n.useRef)(null), eE = (0, n.useRef)({}), eC = (0, n.useRef)(null), eN = (0, n.useRef)([]), eA = (0, n.useRef)(en), e$ = (0, n.useRef)(el), eS = (0, n.useRef)(0), eT = (0, n.useRef)(null);
    (0, n.useLayoutEffect)(() => {
      eA.current = en, e$.current = el;
    });
    let eL = (0, n.useCallback)(
      (e3) => {
        eA.current = e3, ei(e3), a2?.(e3);
      },
      [a2]
    ), ez = () => {
      eN.current.forEach((e3) => window.clearTimeout(e3)), eN.current = [];
    };
    (0, n.useEffect)(
      () => () => {
        ez(), eC.current?.abort();
      },
      []
    );
    let eM = Y2.filter((e3) => el[e3]?.state === "review"), eP = (0, n.useCallback)(
      async (e3) => {
        let t3, a3 = e3.trim();
        if (!a3) return;
        eC.current?.abort(), ez();
        let r2 = new AbortController();
        eC.current = r2, eS.current = performance.now(), et("source"), er("reading"), es({}), ep(null), em({ id: null, done: 0, total: 0 }), ey({ text: `Reading ${U(a3)} lines`, tone: "neutral" });
        try {
          t3 = await G2(e3, r2.signal);
        } catch (e4) {
          if (r2.signal.aborted || e4 instanceof DOMException && "AbortError" === e4.name || e4?.name === "AbortError")
            return;
          er("error"), ey({
            text: "Couldn't read that text. Try again.",
            tone: "danger"
          }), eT.current?.();
          return;
        }
        if (r2.signal.aborted) return;
        let n2 = Y2.filter((e4) => t3[e4]?.value);
        if (!n2.length) {
          er("error"), ey({
            text: "No contact details found in that text.",
            tone: "danger"
          }), eT.current?.();
          return;
        }
        ef({ ...eA.current }), er("filling"), em({ id: null, done: 0, total: n2.length });
        let i2 = (e4, a4) => {
          let r3 = t3[e4];
          eL({ ...eA.current, [e4]: r3.value }), es((t4) => ({
            ...t4,
            [e4]: { ...r3, state: r3.confidence < _2 ? "review" : "ok" }
          })), ec((t4) => ({ ...t4, [e4]: (t4[e4] ?? 0) + 1 })), em({ id: e4, done: a4 + 1, total: n2.length });
        }, l2 = () => {
          let e4 = n2.filter((e5) => t3[e5].confidence < _2).map((e5) => J(e5).toLowerCase()), a4 = ((performance.now() - eS.current) / 1e3).toFixed(1);
          er("done"), em({ id: null, done: n2.length, total: n2.length }), ey(
            e4.length ? {
              text: `Filled ${n2.length} fields. Check the ${K(e4)}.`,
              tone: "warning",
              sr: q2 ? "Simulated, nothing was sent." : void 0
            } : {
              text: `Filled ${n2.length} fields in ${a4}s.`,
              tone: "success",
              sr: q2 ? "Simulated, nothing was sent." : void 0
            }
          ), E2?.(t3), eT.current?.();
        };
        if (Z2) {
          n2.forEach(i2), l2();
          return;
        }
        n2.forEach((e4, t4) => {
          eN.current.push(window.setTimeout(() => i2(e4, t4), 140 * t4));
        }), eN.current.push(window.setTimeout(l2, 140 * n2.length + 120));
      },
      [eL, J, E2, Y2, G2, Z2, _2, q2]
    ), eF = (0, n.useCallback)(() => {
      "reading" === ea && (eC.current?.abort(), er("idle"), et("edit"), ey({ text: "Stopped. Nothing changed.", tone: "neutral" }));
    }, [ea]), eR = (0, n.useCallback)(() => {
      eu && (eC.current?.abort(), ez(), eL(eu), C2?.(eu), ef(null), es({}), ep(null), er("idle"), et("edit"), em({ id: null, done: 0, total: 0 }), ey({ text: "Restored the previous values.", tone: "neutral" }));
    }, [eL, C2, eu]), eB = (0, n.useCallback)(
      (e3) => {
        es((t4) => t4[e3] ? { ...t4, [e3]: { ...t4[e3], state: "checked" } } : t4);
        let t3 = Y2.filter((t4) => t4 !== e3 && e$.current[t4]?.state === "review");
        ey(
          t3.length ? {
            text: `${J(e3)} checked. ${t3.length} left to review.`,
            tone: "warning"
          } : { text: "All fields checked.", tone: "success" }
        );
      },
      [J, Y2]
    ), eD = async () => {
      if (eM.length) {
        eE.current[eM[0]]?.focus(), ey({
          text: `Check the ${K(eM.map((e4) => J(e4).toLowerCase()))} before saving.`,
          tone: "warning"
        });
        return;
      }
      let e3 = eA.current;
      if (!Object.values(e3).some((e4) => e4.trim()))
        return void ey({
          text: "Nothing to save yet. Paste some text first.",
          tone: "neutral"
        });
      ex(true);
      try {
        N2 ? await N2(e3) : await new Promise((e4) => window.setTimeout(e4, 650));
        let t3 = e3[Y2[0]]?.trim();
        ey({
          text: `Saved${t3 ? ` ${t3}` : ""}.${N2 ? "" : " Simulated, nothing was sent."}`,
          tone: "success"
        });
      } catch {
        ey({ text: "Couldn't save. Try again.", tone: "danger" });
      } finally {
        ex(false);
      }
    }, eI = () => k2[eb % k2.length], eO = "filling" === ea ? ed.id : eh, eH = (0, n.useMemo)(
      () => (function(e3, t3, a3) {
        let r2 = [];
        for (let n3 of a3) {
          let a4 = t3[n3]?.source;
          if (!a4) continue;
          let i3 = 0, l2 = e3.indexOf(a4, i3);
          for (; -1 !== l2 && r2.some((e4) => l2 < e4.end && l2 + a4.length > e4.start); )
            i3 = l2 + 1, l2 = e3.indexOf(a4, i3);
          -1 !== l2 && r2.push({ id: n3, start: l2, end: l2 + a4.length });
        }
        r2.sort((e4, t4) => e4.start - t4.start);
        let n2 = [], i2 = 0;
        for (let t4 of r2)
          t4.start > i2 && n2.push({ text: e3.slice(i2, t4.start) }), n2.push({ text: e3.slice(t4.start, t4.end), id: t4.id }), i2 = t4.end;
        return i2 < e3.length && n2.push({ text: e3.slice(i2) }), n2;
      })(Q, el, Y2),
      [Q, el, Y2]
    );
    (0, n.useEffect)(() => {
      let e3 = ej.current;
      if (!e3 || !eO) return;
      let t3 = e3.querySelector(`[data-field="${CSS.escape(eO)}"]`);
      if (!t3) return;
      let a3 = t3.offsetTop - e3.offsetTop, r2 = a3 + t3.offsetHeight;
      a3 < e3.scrollTop + 8 ? e3.scrollTo({
        top: Math.max(0, a3 - 12),
        behavior: Z2 ? "auto" : "smooth"
      }) : r2 > e3.scrollTop + e3.clientHeight - 8 && e3.scrollTo({
        top: r2 - e3.clientHeight + 12,
        behavior: Z2 ? "auto" : "smooth"
      });
    }, [eO, Z2]);
    let eK = j2 ?? !b2, eU = (0, n.useRef)(false), eW = (0, n.useRef)(true), eV = (0, n.useRef)({
      run: eP,
      confirm: eB,
      undo: eR,
      samples: k2,
      order: Y2
    });
    (0, n.useLayoutEffect)(() => {
      eV.current = { run: eP, confirm: eB, undo: eR, samples: k2, order: Y2 };
    }), (0, n.useEffect)(() => {
      let e3, t3 = ew.current;
      if (!eK || !t3 || !eV.current.samples.length) return;
      let a3 = [];
      eU.current = false;
      let r2 = () => {
        eU.current = true;
      };
      t3.addEventListener("pointerdown", r2), t3.addEventListener("keydown", r2);
      let n2 = null;
      "u" > typeof IntersectionObserver && (e3 = new IntersectionObserver(
        ([e4]) => {
          eW.current = e4.isIntersecting, e4.isIntersecting && n2?.();
        },
        { threshold: 0.35 }
      )).observe(t3);
      let i2 = false, l2 = () => i2 || eU.current, s2 = (e4) => new Promise((t4) => {
        let r3 = () => {
          if (l2()) return t4();
          if (!eW.current) {
            n2 = () => {
              n2 = null, r3();
            };
            return;
          }
          a3.push(window.setTimeout(t4, e4));
        };
        r3();
      }), o2 = () => new Promise((e4) => {
        eT.current = () => {
          eT.current = null, e4();
        };
      });
      return (async () => {
        for (let e4 = 0; !l2() && (await s2(0 === e4 ? 700 : 600), !l2()); e4++) {
          let { samples: t4 } = eV.current, a4 = t4[e4 % t4.length];
          e_(e4 + 1), X(a4.text);
          let r3 = o2();
          if (eV.current.run(a4.text), await r3, l2() || Z2 || (await s2(1500), l2()))
            break;
          let n3 = eV.current.order.find(
            (e5) => e$.current[e5]?.state === "review"
          );
          if (n3) {
            if (ep(n3), await s2(900), l2()) break;
            eV.current.confirm(n3), ep(null);
          }
          if (await s2(1800), l2()) break;
          eV.current.undo();
        }
      })(), () => {
        i2 = true, n2?.(), a3.forEach((e4) => window.clearTimeout(e4)), eT.current = null, e3?.disconnect(), t3.removeEventListener("pointerdown", r2), t3.removeEventListener("keydown", r2);
      };
    }, [eK, Z2]);
    let eZ = U(Q), eq = "edit" === ee ? Q.trim() ? "ready" : "empty" : ea, eG = "edit" === ee ? Q.trim() ? `to read ${eZ} ${1 === eZ ? "line" : "lines"}` : "Paste anything to fill the form" : "reading" === ea ? `Reading with ${T2.name}` : "filling" === ea ? `Filling ${ed.done} of ${ed.total}` : `Read by ${T2.name}`, eY = "success" === eg.tone ? o.A : "warning" === eg.tone ? c.A : "danger" === eg.tone ? d.A : null, eJ = eh && el[eh]?.state === "review" ? el[eh]?.note : void 0, eQ = eJ && eh ? { text: `${J(eh)}: ${eJ}.`, tone: "warning" } : eg, eX = eJ ? c.A : eY, e0 = "reading" === ea || "filling" === ea;
    return (0, r.jsxs)("div", {
      ref: ew,
      className: D(B().root, P2),
      "data-phase": ea,
      onKeyDown: (e3) => {
        "Escape" === e3.key && "reading" === ea && (e3.preventDefault(), eF());
      },
      children: [
        (0, r.jsxs)("header", {
          className: B().head,
          children: [
            (0, r.jsx)("h3", {
              className: B().title,
              id: `${R2}-title`,
              children: L2
            }),
            z2 ? (0, r.jsx)("p", { className: B().description, children: z2 }) : null
          ]
        }),
        (0, r.jsxs)("div", {
          className: B().body,
          children: [
            (0, r.jsxs)("div", {
              className: B().well,
              "data-view": ee,
              children: [
                (0, r.jsx)("div", {
                  className: B().editor,
                  children: (0, r.jsx)(l.N, {
                    initial: false,
                    children: "edit" === ee ? (0, r.jsx)(
                      s.PY1.div,
                      {
                        className: B().layer,
                        initial: { opacity: 0 },
                        animate: { opacity: 1, transition: O },
                        exit: { opacity: 0, transition: H },
                        children: (0, r.jsx)("textarea", {
                          ref: ek,
                          className: B().textarea,
                          value: Q,
                          onChange: (e3) => X(e3.target.value),
                          onPaste: (e3) => {
                            let t3 = e3.clipboardData.getData("text/plain");
                            if (!t3.trim()) return;
                            e3.preventDefault();
                            let a3 = e3.currentTarget, r2 = Q.slice(0, a3.selectionStart) + t3 + Q.slice(a3.selectionEnd);
                            X(r2), eP(r2);
                          },
                          onKeyDown: (e3) => {
                            "Enter" === e3.key && (e3.metaKey || e3.ctrlKey) && (e3.preventDefault(), eP(Q));
                          },
                          placeholder: "Paste an email signature, a business card or any messy text.\n\nMaya Okafor\nHead of Partnerships, Stripe\nmaya.okafor@stripe.com",
                          "aria-label": "Paste anything",
                          "aria-describedby": `${R2}-bar`,
                          spellCheck: false
                        })
                      },
                      "edit"
                    ) : (0, r.jsx)(
                      s.PY1.div,
                      {
                        ref: ej,
                        className: D(B().layer, B().source),
                        initial: { opacity: 0 },
                        animate: { opacity: 1, transition: O },
                        exit: { opacity: 0, transition: H },
                        tabIndex: 0,
                        role: "region",
                        "aria-label": "Pasted text",
                        children: eH.map(
                          (e3, t3) => e3.id ? (0, r.jsx)(
                            "mark",
                            {
                              "data-field": e3.id,
                              "data-review": el[e3.id]?.state === "review" || void 0,
                              "data-active": eO === e3.id || void 0,
                              className: B().span,
                              children: e3.text
                            },
                            `${e3.id}-${t3}`
                          ) : (0, r.jsx)("span", { children: e3.text }, t3)
                        )
                      },
                      "source"
                    )
                  })
                }),
                (0, r.jsxs)("div", {
                  className: B().bar,
                  id: `${R2}-bar`,
                  children: [
                    (0, r.jsxs)("span", {
                      className: B().model,
                      children: [
                        (0, r.jsx)("span", {
                          className: B().modelMark,
                          "aria-hidden": "true",
                          children: T2.mark ?? (0, r.jsx)(S, { size: 14 })
                        }),
                        (0, r.jsx)(W, {
                          id: eq,
                          className: B().barText,
                          children: "reading" === ea && "source" === ee ? (0, r.jsx)(v.n, { children: eG }) : "ready" === eq ? (0, r.jsxs)("span", {
                            children: [
                              (0, r.jsx)(y.ue, {
                                keys: ["mod", "enter"],
                                size: "sm",
                                className: B().hintKey
                              }),
                              eG
                            ]
                          }) : "filling" === eq ? (0, r.jsxs)("span", {
                            children: [
                              "Filling ",
                              (0, r.jsxs)("span", {
                                className: B().barNum,
                                children: [
                                  (0, r.jsx)("span", {
                                    className: B().barGhost,
                                    "aria-hidden": "true",
                                    children: ed.total
                                  }),
                                  (0, r.jsx)("span", {
                                    children: ed.done
                                  })
                                ]
                              }),
                              " of ",
                              ed.total
                            ]
                          }) : (0, r.jsx)("span", { children: eG })
                        })
                      ]
                    }),
                    (0, r.jsx)("span", {
                      className: B().barActions,
                      children: "edit" === ee ? (0, r.jsxs)(r.Fragment, {
                        children: [
                          k2.length ? (0, r.jsx)(g.$, {
                            variant: "ghost",
                            size: "sm",
                            className: B().barButton,
                            onClick: () => {
                              if (!k2.length) return;
                              let e3 = eI();
                              e_((e4) => e4 + 1), X(e3.text), eP(e3.text);
                            },
                            title: `Paste the ${eI().label.toLowerCase()} sample`,
                            children: "Try sample"
                          }) : null,
                          (0, r.jsx)(g.$, {
                            variant: "primary",
                            size: "sm",
                            className: B().barButton,
                            onClick: () => void eP(Q),
                            disabled: !Q.trim(),
                            "aria-keyshortcuts": "Meta+Enter Control+Enter",
                            children: "Fill"
                          })
                        ]
                      }) : "reading" === ea ? (0, r.jsxs)(g.$, {
                        variant: "ghost",
                        size: "sm",
                        className: B().barButton,
                        onClick: eF,
                        "aria-keyshortcuts": "Escape",
                        children: [
                          (0, r.jsx)(m.A, {
                            size: 12,
                            "aria-hidden": "true",
                            className: B().stopIcon
                          }),
                          "Stop"
                        ]
                      }) : (0, r.jsxs)(g.$, {
                        variant: "ghost",
                        size: "sm",
                        className: B().barButton,
                        onClick: () => {
                          et("edit"), "error" === ea && er("idle"), window.requestAnimationFrame(
                            () => ek.current?.focus()
                          );
                        },
                        disabled: "filling" === ea,
                        children: [
                          (0, r.jsx)(u.A, {
                            size: 14,
                            "aria-hidden": "true"
                          }),
                          "Edit text"
                        ]
                      })
                    })
                  ]
                })
              ]
            }),
            (0, r.jsx)("div", {
              className: B().form,
              role: "group",
              "aria-labelledby": `${R2}-title`,
              children: e2.map((e3) => {
                let t3, a3 = el[e3.id], n2 = en[e3.id] ?? "", i2 = eo[e3.id] ?? 0, o2 = `${R2}-${e3.id}`, c2 = a3 ? Math.round(100 * a3.confidence) : 0, d2 = a3 ? "review" === a3.state ? {
                  key: "review",
                  label: `${c2}% \xB7 Review`,
                  tone: "warning"
                } : "checked" === a3.state ? { key: "checked", label: "Checked", tone: "success" } : "edited" === a3.state ? { key: "edited", label: "Edited", tone: "neutral" } : { key: "ok", label: `${c2}%`, tone: "success" } : null, m2 = "company" === e3.kind && n2.trim() ? $2?.(n2) ?? (function(e4, t4 = 16) {
                  let a4 = e4.trim().toLowerCase().replace(/,?\s+(inc|llc|ltd|gmbh)\.?$/, "");
                  return F[a4]?.(t4);
                })(n2) : void 0;
                return (0, r.jsxs)(
                  "div",
                  {
                    className: B().field,
                    "data-span": e3.span ?? 1,
                    "data-state": a3?.state,
                    onPointerEnter: () => a3 && ep(e3.id),
                    onPointerLeave: () => ep(
                      (t4) => t4 === e3.id && document.activeElement !== eE.current[e3.id] ? null : t4
                    ),
                    children: [
                      (0, r.jsxs)("div", {
                        className: B().labelRow,
                        children: [
                          (0, r.jsx)("label", {
                            className: B().label,
                            htmlFor: o2,
                            children: e3.label
                          }),
                          (0, r.jsx)("span", {
                            className: B().badgeSlot,
                            "aria-hidden": "true",
                            children: (0, r.jsx)(l.N, {
                              initial: false,
                              children: d2 ? (0, r.jsxs)(
                                s.PY1.span,
                                {
                                  className: B().badge,
                                  "data-tone": d2.tone,
                                  title: a3 ? `Confidence ${c2}%` : void 0,
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1, transition: O },
                                  exit: { opacity: 0, transition: H },
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: B().dot
                                    }),
                                    d2.label
                                  ]
                                },
                                d2.key
                              ) : null
                            })
                          })
                        ]
                      }),
                      (0, r.jsxs)("div", {
                        className: B().control,
                        "data-company": "company" === e3.kind || void 0,
                        children: [
                          "company" === e3.kind ? (0, r.jsx)("span", {
                            className: B().logo,
                            "aria-hidden": "true",
                            children: (0, r.jsx)(l.N, {
                              initial: false,
                              children: (0, r.jsx)(
                                s.PY1.span,
                                {
                                  className: B().logoItem,
                                  "data-empty": !m2 || void 0,
                                  initial: {
                                    opacity: 0,
                                    scale: Z2 ? 1 : 0.9
                                  },
                                  animate: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: O
                                  },
                                  exit: { opacity: 0, transition: H },
                                  children: m2 ?? (0, r.jsx)(f.A, {
                                    size: 16,
                                    strokeWidth: 1.75
                                  })
                                },
                                m2 ? n2.trim().toLowerCase() : "none"
                              )
                            })
                          }) : null,
                          (0, r.jsx)("input", {
                            ref: (t4) => {
                              eE.current[e3.id] = t4;
                            },
                            id: o2,
                            className: B().input,
                            type: "email" === (t3 = e3.kind) ? "email" : "tel" === t3 ? "tel" : "url" === t3 ? "url" : "text",
                            inputMode: "tel" === e3.kind ? "tel" : "email" === e3.kind ? "email" : void 0,
                            autoComplete: e3.autoComplete,
                            placeholder: e3.placeholder,
                            value: n2,
                            "data-flash": i2 ? i2 % 2 ? "a" : "b" : void 0,
                            "aria-invalid": a3?.state === "review" || void 0,
                            "aria-description": a3 ? "review" === a3.state ? `Filled by AI with ${c2}% confidence, needs review${a3.note ? `: ${a3.note}` : ""}` : "edited" === a3.state ? "Edited after filling" : `Filled by AI with ${c2}% confidence` : void 0,
                            onChange: (t4) => {
                              var a4, r2;
                              return a4 = e3.id, r2 = t4.target.value, void (eL({ ...eA.current, [a4]: r2 }), e$.current[a4] && "edited" !== e$.current[a4].state && es((e4) => ({
                                ...e4,
                                [a4]: { ...e4[a4], state: "edited" }
                              })));
                            },
                            onFocus: () => a3 && ep(e3.id),
                            onBlur: () => ep((t4) => t4 === e3.id ? null : t4)
                          }),
                          (0, r.jsx)(l.N, {
                            initial: false,
                            children: a3?.state === "review" ? (0, r.jsx)(
                              s.PY1.button,
                              {
                                type: "button",
                                className: B().confirm,
                                onClick: () => eB(e3.id),
                                "aria-label": `Mark ${e3.label.toLowerCase()} as correct`,
                                title: "Looks right",
                                initial: {
                                  opacity: 0,
                                  scale: Z2 ? 1 : 0.9
                                },
                                animate: {
                                  opacity: 1,
                                  scale: 1,
                                  transition: O
                                },
                                exit: {
                                  opacity: 0,
                                  scale: Z2 ? 1 : 0.9,
                                  transition: H
                                },
                                whileTap: Z2 ? void 0 : { scale: 0.92 },
                                children: (0, r.jsx)(h.A, {
                                  size: 14,
                                  strokeWidth: 2,
                                  "aria-hidden": "true"
                                })
                              },
                              "confirm"
                            ) : null
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
        }),
        (0, r.jsxs)("footer", {
          className: B().foot,
          children: [
            (0, r.jsx)("p", {
              className: B().status,
              "data-tone": eQ.tone,
              children: (0, r.jsxs)(W, {
                id: eQ.text,
                className: B().statusSwap,
                children: [
                  eX ? (0, r.jsx)(eX, {
                    size: 14,
                    className: B().statusIcon,
                    "aria-hidden": "true"
                  }) : null,
                  (0, r.jsx)("span", {
                    className: B().statusText,
                    children: eQ.text
                  })
                ]
              })
            }),
            (0, r.jsx)("span", {
              className: B().srOnly,
              role: "status",
              "aria-live": "polite",
              children: [eg.text, eg.sr].filter(Boolean).join(" ")
            }),
            (0, r.jsxs)("div", {
              className: B().actions,
              children: [
                (0, r.jsxs)(g.$, {
                  variant: "ghost",
                  size: "sm",
                  onClick: eR,
                  disabled: !eu || e0,
                  className: B().footButton,
                  children: [
                    (0, r.jsx)(p.A, { size: 14, "aria-hidden": "true" }),
                    "Undo"
                  ]
                }),
                (0, r.jsx)(g.$, {
                  variant: "primary",
                  size: "sm",
                  onClick: () => void eD(),
                  loading: ev,
                  disabled: e0,
                  className: B().footButton,
                  children: M2
                })
              ]
            })
          ]
        })
      ]
    });
  }
  var Z = a(65252), q = a.n(Z);
  function G() {
    return (0, r.jsx)("div", {
      className: q().demo,
      children: (0, r.jsx)(V, {})
    });
  }
  let Y = G;
}

__m(__module,__exports,__require);
}