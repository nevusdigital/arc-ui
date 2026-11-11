/* ai-translate (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(13626, function(__module,__exports,__require){
"use strict";
const __m = (e, t, a) => {
  "use strict";
  a.r(t), a.d(t, { AiTranslateDemo: () => B, default: () => D });
  var n = a(95155), i = a(12115), r = a(57793), s = a(92171), l = a(18310), o = a(80642), d = a(25354), c = a(25684), u = a(12363), h = a(64577), m = a(35484), p = a(92298), g = a(92218), f = a(51288), _ = a(52898);
  let v = [
    { code: "en", native: "English", english: "English" },
    { code: "de", native: "Deutsch", english: "German" },
    { code: "fr", native: "Fran\xE7ais", english: "French" },
    { code: "es", native: "Espa\xF1ol", english: "Spanish" },
    { code: "ja", native: "\u65E5\u672C\u8A9E", english: "Japanese" },
    { code: "pt", native: "Portugu\xEAs", english: "Portuguese" }
  ], x = (e2) => v.find((t2) => t2.code === e2) ?? v[0], b = {
    name: "Chlo\xE9 Nguyen",
    role: "Mobile lead, Lyon",
    avatar: "media/people/chloe-nguyen.svg"
  }, y = {
    en: "Hi everyone! Version 4.2 of the iOS app went into Apple review last night, with the new offline mode. Early beta feedback is very good: sync time drops from 9 to 3 seconds on average. Could you check the translations on the payment screens before Thursday? Thanks in advance, and great work on this sprint.",
    de: "Hallo zusammen! Version 4.2 der iOS-App ist gestern Abend mit dem neuen Offline-Modus in die Pr\xFCfung bei Apple gegangen. Die ersten R\xFCckmeldungen aus der Beta sind sehr gut: Die Synchronisierung dauert im Schnitt nur noch 3 statt 9 Sekunden. K\xF6nnt ihr die \xDCbersetzungen der Bezahlbildschirme bis Donnerstag pr\xFCfen? Danke im Voraus und gro\xDFartige Arbeit in diesem Sprint.",
    es: "\xA1Hola a todo el equipo! La versi\xF3n 4.2 de la app de iOS entr\xF3 anoche en revisi\xF3n de Apple, con el nuevo modo sin conexi\xF3n. Los primeros comentarios de la beta son muy buenos: la sincronizaci\xF3n baja de 9 a 3 segundos de media. \xBFPod\xE9is revisar las traducciones de las pantallas de pago antes del jueves? Gracias de antemano, y enhorabuena por este sprint.",
    ja: "\u30C1\u30FC\u30E0\u306E\u7686\u3055\u3093\u3001\u3053\u3093\u306B\u3061\u306F\uFF01iOS\u30A2\u30D7\u30EA\u306E\u30D0\u30FC\u30B8\u30E7\u30F34.2\u3092\u3001\u65B0\u3057\u3044\u30AA\u30D5\u30E9\u30A4\u30F3\u30E2\u30FC\u30C9\u3068\u4E00\u7DD2\u306B\u6628\u591CApple\u306E\u5BE9\u67FB\u306B\u63D0\u51FA\u3057\u307E\u3057\u305F\u3002\u30D9\u30FC\u30BF\u7248\u306E\u521D\u671F\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u306F\u3068\u3066\u3082\u597D\u8A55\u3067\u3001\u540C\u671F\u6642\u9593\u306F\u5E73\u57479\u79D2\u304B\u30893\u79D2\u306B\u77ED\u7E2E\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u6728\u66DC\u65E5\u307E\u3067\u306B\u6C7A\u6E08\u753B\u9762\u306E\u7FFB\u8A33\u3092\u78BA\u8A8D\u3057\u3066\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F\u3044\u3064\u3082\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3001\u4ECA\u56DE\u306E\u30B9\u30D7\u30EA\u30F3\u30C8\u3082\u304A\u75B2\u308C\u3055\u307E\u3067\u3057\u305F\u3002",
    pt: "Ol\xE1 a todos! A vers\xE3o 4.2 do app para iOS entrou ontem \xE0 noite na revis\xE3o da Apple, com o novo modo offline. Os primeiros coment\xE1rios da beta s\xE3o muito bons: a sincroniza\xE7\xE3o caiu de 9 para 3 segundos, em m\xE9dia. Voc\xEAs podem revisar as tradu\xE7\xF5es das telas de pagamento at\xE9 quinta-feira? Obrigada desde j\xE1, e parab\xE9ns por este sprint."
  }, j = {
    en: [
      "the",
      "and",
      "is",
      "you",
      "of",
      "to",
      "with",
      "for",
      "this",
      "that",
      "on"
    ],
    de: [
      "der",
      "die",
      "das",
      "und",
      "ist",
      "nicht",
      "mit",
      "ihr",
      "f\xFCr",
      "zu",
      "sind",
      "auf"
    ],
    fr: [
      "le",
      "la",
      "les",
      "et",
      "est",
      "pour",
      "avec",
      "une",
      "des",
      "vous",
      "de",
      "ce"
    ],
    es: [
      "el",
      "la",
      "los",
      "las",
      "y",
      "es",
      "para",
      "con",
      "una",
      "del",
      "por",
      "este"
    ],
    pt: [
      "o",
      "a",
      "os",
      "as",
      "e",
      "\xE9",
      "para",
      "com",
      "uma",
      "do",
      "da",
      "n\xE3o",
      "este"
    ]
  };
  function k(e2) {
    return e2.match(/[\s\S]+?(?:[.!?…]+["'»”’)]*(?=\s|$)|[。！？]+|$)\s*/g)?.filter(Boolean) ?? [];
  }
  function w({ title: e2 = "Claude", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "#D97757",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  var N = a(31154), T = a.n(N);
  let E = (...e2) => e2.filter(Boolean).join(" "), S = ["en", "de", "ja", "pt"], L = [0.22, 1, 0.36, 1], C = { type: "spring", visualDuration: 0.24, bounce: 0 }, O = {
    enter: (e2) => e2 ? { opacity: 0, y: 2 } : { opacity: 1, y: 0 },
    shown: { opacity: 1, y: 0, transition: { duration: 0.16, ease: L } },
    leave: (e2) => ({ opacity: 0, transition: { duration: 0.1 * !!e2 } })
  }, $ = (e2) => {
    let t2 = e2.chunks.join(""), a2 = e2.pending.join("");
    return a2 ? t2 && !/\s$/.test(t2) ? `${t2} ${a2}` : t2 + a2 : t2;
  };
  function R(e2, t2) {
    return new Promise((a2, n2) => {
      if (t2.aborted) return void n2(new DOMException("Aborted", "AbortError"));
      let i2 = window.setTimeout(a2, e2);
      t2.addEventListener(
        "abort",
        () => {
          window.clearTimeout(i2), n2(new DOMException("Aborted", "AbortError"));
        },
        { once: true }
      );
    });
  }
  function z({
    text: e2,
    sourceLanguage: t2,
    languages: a2,
    value: N2,
    defaultValue: A2,
    onValueChange: P2,
    translate: I2,
    translations: B2,
    onTranslate: D2,
    onError: M,
    author: W,
    timestamp: F,
    model: V = {
      name: "Claude Haiku 5.5",
      mark: (0, n.jsx)(w, { title: "Claude" })
    },
    autoPlay: H,
    simulated: Y,
    className: G
  }) {
    let K, J, Z, U = (0, l.I)() ?? false, q = void 0 === e2, X = e2 ?? "Bonjour \xE0 toute l'\xE9quipe ! La version 4.2 de l'app iOS est partie en revue chez Apple hier soir, avec le nouveau mode hors ligne. Les premiers retours de la b\xEAta sont tr\xE8s bons : la synchronisation passe de 9 \xE0 3 secondes en moyenne. Pouvez-vous v\xE9rifier les traductions des \xE9crans de paiement avant jeudi ? Merci d'avance, et bravo pour ce sprint.", Q = t2 ?? (q ? "fr" : (function(e3) {
      if (/[぀-ヿ一-龯]/.test(e3)) return "ja";
      let t3 = e3.toLowerCase().match(/[\p{L}']+/gu) ?? [], a3 = "en", n2 = 0;
      for (let [e4, i2] of Object.entries(j)) {
        let r2 = t3.filter((e5) => i2.includes(e5)).length;
        r2 > n2 && (a3 = e4, n2 = r2);
      }
      return a3;
    })(X)), ee = B2 ?? (q ? y : void 0), et = void 0 === W ? q ? b : null : W, ea = F ?? (q ? "Oct 27, 09:14" : void 0), en = (a2 ?? v.map((e3) => e3.code)).map(x), ei = Y ?? !I2, er = H ?? (q && void 0 === N2 && !I2), [es, el] = (0, i.useState)(A2 ?? Q), eo = N2 ?? es, [ed, ec] = (0, i.useState)(() => ({
      id: 0,
      lang: Q,
      chunks: [X],
      pending: [],
      pendingOffset: 0,
      pendingLang: Q,
      live: false,
      fade: false
    })), [eu, eh] = (0, i.useState)("idle"), [em, ep] = (0, i.useState)(null), [eg, ef] = (0, i.useState)(0), [e_, ev] = (0, i.useState)(null), [ex, eb] = (0, i.useState)(""), [ey, ej] = (0, i.useState)(true), [ek, ew] = (0, i.useState)(false), eN = (0, i.useRef)(null), eT = (0, i.useRef)(ed), eE = (0, i.useRef)(/* @__PURE__ */ new Map()), eS = (0, i.useRef)(null), eL = (0, i.useRef)(1), eC = (0, i.useRef)(0), eO = (0, i.useRef)({
      text: X,
      source: Q,
      translate: I2,
      translations: ee,
      onTranslate: D2,
      onError: M,
      isSimulated: ei
    });
    (0, i.useLayoutEffect)(() => {
      eT.current = ed, eO.current = {
        text: X,
        source: Q,
        translate: I2,
        translations: ee,
        onTranslate: D2,
        onError: M,
        isSimulated: ei
      };
    });
    let { outer: e$, inner: eR } = (J = (0, i.useRef)(null), Z = (0, i.useRef)(null), (0, i.useEffect)(() => {
      let e3, t3 = J.current, a3 = Z.current;
      if (!t3 || !a3 || "u" < typeof ResizeObserver) return;
      let n2 = a3.offsetHeight, i2 = a3.offsetWidth, r2 = () => {
        t3.style.height = "", t3.style.overflow = "", e3 = void 0;
      }, l2 = new ResizeObserver(() => {
        let l3 = a3.offsetHeight, o2 = a3.offsetWidth, d2 = o2 !== i2;
        if (i2 = o2, l3 === n2) return;
        let c2 = e3 ? t3.getBoundingClientRect().height : n2;
        (n2 = l3, e3?.stop(), U || d2) ? r2() : (t3.style.overflow = "hidden", e3 = (0, s.i)(t3, { height: [c2, l3] }, { ...C, onComplete: r2 }));
      });
      return l2.observe(a3), () => {
        l2.disconnect(), e3?.stop();
      };
    }, [U]), { outer: J, inner: Z });
    function ez(e3) {
      e3 === eo && "error" === eu ? ef((e4) => e4 + 1) : (void 0 === N2 && el(e3), P2?.(e3));
    }
    let eA = (0, i.useRef)(ez);
    (0, i.useLayoutEffect)(() => {
      eA.current = ez;
    });
    let eP = (0, i.useRef)({ text: X, source: Q }), eI = (0, i.useRef)(() => () => {
    });
    (0, i.useLayoutEffect)(() => {
      eI.current = (e3) => {
        let {
          text: t3,
          source: a3,
          translate: n2,
          translations: i2,
          isSimulated: r2
        } = eO.current, s2 = eT.current, l2 = x(e3).english;
        eS.current?.abort();
        let o2 = new AbortController();
        eS.current = o2, ep(null);
        let d2 = eP.current.text !== t3 || eP.current.source !== a3;
        if (d2 && (eP.current = { text: t3, source: a3 }, eE.current.clear(), ev(null), ec(
          s2 = {
            id: eL.current++,
            lang: a3,
            chunks: [t3],
            pending: [],
            pendingOffset: 0,
            pendingLang: a3,
            live: false,
            fade: true
          }
        )), e3 === a3)
          return eh("idle"), !d2 && (s2.lang !== a3 || s2.live || s2.pending.length) && (ec({
            id: eL.current++,
            lang: a3,
            chunks: [t3],
            pending: [],
            pendingOffset: 0,
            pendingLang: a3,
            live: false,
            fade: true
          }), eb(`Showing the original ${x(a3).english}`)), () => o2.abort();
        ev(e3);
        let c2 = eE.current.get(e3);
        if (void 0 !== c2)
          return eh("done"), (s2.lang !== e3 || s2.live) && ec({
            id: eL.current++,
            lang: e3,
            chunks: [c2],
            pending: [],
            pendingOffset: 0,
            pendingLang: e3,
            live: false,
            fade: true
          }), eb(`Translated from ${x(a3).english} to ${l2}`), () => o2.abort();
        let u2 = k($(s2)), h2 = eL.current++, m2 = [], p2 = "";
        ec({
          id: h2,
          lang: e3,
          chunks: [],
          pending: u2,
          pendingOffset: 0,
          pendingLang: s2.lang,
          live: true,
          fade: false
        }), eh("thinking"), eb(
          `Translating to ${l2}.${r2 ? " Simulated, nothing was sent." : ""}`
        );
        let g2 = (e4) => {
          if (o2.signal.aborted || !e4) return;
          m2.push(e4);
          let t4 = k(p2 += e4).length;
          ec(
            (e5) => e5.id === h2 ? { ...e5, chunks: [...m2], pending: u2.slice(t4), pendingOffset: t4 } : e5
          ), eh("streaming");
        };
        return (async () => {
          try {
            let s3;
            if (n2) s3 = n2({ text: t3, from: a3, to: e3, signal: o2.signal });
            else {
              let t4 = i2?.[e3];
              s3 = R(560, o2.signal).then(() => {
                if (void 0 === t4)
                  throw Error(`No ${l2} translation is available`);
                return t4;
              });
            }
            if ("function" == typeof s3.then) {
              let e4 = await s3;
              for (let t4 of (function(e5) {
                let t5 = [4, 3, 5, 6, 4, 5, 3, 6];
                if (!/\s/.test(e5.trim()) || /[぀-ヿ一-龯]/.test(e5)) {
                  let a5 = [];
                  for (let n4 = 0, i3 = 0; n4 < e5.length; i3++) {
                    let r3 = 2 * t5[i3 % t5.length] + 2;
                    a5.push(e5.slice(n4, n4 + r3)), n4 += r3;
                  }
                  return a5;
                }
                let a4 = e5.match(/\S+\s*/g) ?? [], n3 = [];
                for (let e6 = 0, i3 = 0; e6 < a4.length; i3++) {
                  let r3 = t5[i3 % t5.length];
                  n3.push(a4.slice(e6, e6 + r3).join("")), e6 += r3;
                }
                return n3;
              })(e4))
                m2.length && await R(34, o2.signal), g2(t4);
            } else
              for await (let e4 of s3) {
                if (o2.signal.aborted) return;
                g2(e4);
              }
            if (o2.signal.aborted) return;
            let d3 = m2.join("");
            if (!d3.trim()) throw Error("The translation came back empty");
            eE.current.set(e3, d3), ec((e4) => e4.id === h2 ? { ...e4, pending: [], live: false } : e4), eh("done"), eb(
              `Translated from ${x(a3).english} to ${l2}.${r2 ? " Simulated, nothing was sent." : ""}`
            ), eO.current.onTranslate?.({ from: a3, to: e3, text: d3 });
          } catch (n3) {
            if (o2.signal.aborted || n3 instanceof DOMException && "AbortError" === n3.name)
              return;
            let t4 = n3 instanceof Error ? n3 : Error(String(n3));
            ec({
              ...s2,
              id: eL.current++,
              chunks: [$(s2)],
              pending: [],
              pendingOffset: 0,
              live: false,
              fade: true
            }), eh("error"), ep(t4.message), eb(`Couldn't translate to ${l2}. ${t4.message}`), eO.current.onError?.(t4, { from: a3, to: e3 });
          }
        })(), () => o2.abort();
      };
    }), (0, i.useEffect)(() => eI.current(eo), [eo, eg, X, Q]), (0, i.useEffect)(() => {
      let e3 = eN.current;
      if (!e3 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(([e4]) => ej(e4?.isIntersecting ?? true), {
        threshold: 0.2
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let eB = er && !ek && ey;
    (0, i.useEffect)(() => {
      if (!eB || "thinking" === eu || "streaming" === eu || "error" === eu || U && eC.current > 0)
        return;
      let e3 = eo === Q, t3 = 0 === eC.current ? 900 : e3 ? 1800 : 2600, a3 = window.setTimeout(() => {
        let e4 = S.filter((e5) => e5 !== Q), t4 = eC.current % (e4.length + 1);
        (eC.current += 1, t4 === e4.length) ? eA.current(Q) : (0 === t4 && eE.current.clear(), eA.current(e4[t4]));
      }, t3);
      return () => window.clearTimeout(a3);
    }, [eB, eu, eo, Q, U]);
    let eD = "thinking" === eu || "streaming" === eu, eM = eo === Q, eW = eM ? e_ : Q, eF = x(Q).english, eV = x(eo).english, eH = !X.trim();
    return K = "error" === eu ? { key: "error", label: "Couldn't translate", tone: "error" } : eD ? { key: `busy-${eo}`, label: `Translating to ${eV}`, shimmer: true } : "done" === eu ? { key: `done-${eo}`, label: `Translated from ${eF}` } : e_ ? { key: "original", label: "Showing original" } : { key: "ready", label: V.name }, (0, n.jsxs)("section", {
      ref: eN,
      className: E(T().root, G),
      "aria-label": et ? `Message from ${et.name}` : "Translatable text",
      onPointerDownCapture: () => ew(true),
      onKeyDownCapture: () => ew(true),
      children: [
        (0, n.jsxs)("header", {
          className: T().head,
          children: [
            et && (0, n.jsxs)("div", {
              className: T().author,
              children: [
                (0, n.jsx)(g.e, {
                  name: et.name,
                  src: et.avatar,
                  size: "md",
                  className: T().avatar
                }),
                (0, n.jsxs)("div", {
                  className: T().byline,
                  children: [
                    (0, n.jsx)("span", {
                      className: T().name,
                      children: et.name
                    }),
                    (et.role || ea) && (0, n.jsx)("span", {
                      className: T().meta,
                      children: [et.role, ea].filter(Boolean).join(" \xB7 ")
                    })
                  ]
                })
              ]
            }),
            !eH && (0, n.jsxs)("span", {
              className: T().chip,
              children: [
                (0, n.jsx)("span", {
                  className: T().chipLabel,
                  children: t2 ? "Written in" : "Detected"
                }),
                eF
              ]
            })
          ]
        }),
        (0, n.jsx)("div", {
          ref: e$,
          className: T().textClip,
          children: (0, n.jsx)("div", {
            ref: eR,
            className: T().textStack,
            children: eH ? (0, n.jsx)("p", {
              className: E(T().text, T().empty),
              children: "Nothing to translate yet."
            }) : (0, n.jsx)(o.N, {
              initial: false,
              custom: ed.fade,
              children: (0, n.jsxs)(
                d.PY1.p,
                {
                  lang: ed.lang,
                  className: T().text,
                  custom: ed.fade,
                  variants: U ? void 0 : O,
                  initial: "enter",
                  animate: "shown",
                  exit: "leave",
                  "aria-busy": eD || void 0,
                  children: [
                    ed.chunks.map(
                      (e3, t3) => (0, n.jsx)(
                        "span",
                        {
                          className: ed.live && !U ? T().chunk : void 0,
                          children: e3
                        },
                        t3
                      )
                    ),
                    ed.pending.length > 0 && (0, n.jsxs)(n.Fragment, {
                      children: [
                        ed.chunks.length > 0 && !/\s$/.test(
                          ed.chunks[ed.chunks.length - 1]
                        ) && " ",
                        ed.pending.map(
                          (e3, t3) => (0, n.jsx)(
                            "span",
                            {
                              lang: ed.pendingLang,
                              className: E(
                                T().pending,
                                U && T().pendingStill
                              ),
                              children: e3
                            },
                            ed.pendingOffset + t3
                          )
                        )
                      ]
                    })
                  ]
                },
                ed.id
              )
            })
          })
        }),
        (0, n.jsxs)("footer", {
          className: T().foot,
          children: [
            (0, n.jsxs)("div", {
              className: T().controls,
              children: [
                (0, n.jsxs)(r.bL, {
                  modal: false,
                  children: [
                    (0, n.jsxs)(r.l9, {
                      className: T().trigger,
                      disabled: eH,
                      "aria-label": `Translate to, ${eM ? "original" : x(eo).native}`,
                      children: [
                        (0, n.jsx)(c.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true",
                          className: T().triggerIcon
                        }),
                        (0, n.jsxs)("span", {
                          className: T().stack,
                          "aria-hidden": "true",
                          children: [
                            (0, n.jsx)("span", {
                              className: T().stackItem,
                              "data-active": eM || void 0,
                              children: "Translate"
                            }),
                            en.filter((e3) => e3.code !== Q).map(
                              (e3) => (0, n.jsx)(
                                "span",
                                {
                                  lang: e3.code,
                                  className: T().stackItem,
                                  "data-active": eo === e3.code || void 0,
                                  children: e3.native
                                },
                                e3.code
                              )
                            )
                          ]
                        }),
                        (0, n.jsx)(u.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true",
                          className: T().chevron
                        })
                      ]
                    }),
                    (0, n.jsx)(r.ZL, {
                      children: (0, n.jsxs)(r.UC, {
                        className: T().menu,
                        align: "start",
                        sideOffset: 6,
                        collisionPadding: 12,
                        loop: true,
                        children: [
                          (0, n.jsx)(r.JU, {
                            className: T().menuLabel,
                            children: "Translate to"
                          }),
                          (0, n.jsx)(r.z6, {
                            value: eo,
                            onValueChange: (e3) => ez(e3),
                            children: en.map(
                              (e3) => (0, n.jsxs)(
                                r.hN,
                                {
                                  value: e3.code,
                                  className: T().item,
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: T().itemCheck,
                                      "aria-hidden": "true",
                                      children: (0, n.jsx)(r.VF, {
                                        children: (0, n.jsx)(h.A, {
                                          size: 14,
                                          strokeWidth: 2
                                        })
                                      })
                                    }),
                                    (0, n.jsx)("span", {
                                      className: T().itemName,
                                      lang: e3.code,
                                      children: e3.native
                                    }),
                                    (0, n.jsx)("span", {
                                      className: T().itemMeta,
                                      children: e3.code === Q ? "Original" : e3.english
                                    })
                                  ]
                                },
                                e3.code
                              )
                            )
                          })
                        ]
                      })
                    })
                  ]
                }),
                (0, n.jsx)("button", {
                  type: "button",
                  className: T().toggle,
                  "aria-pressed": eM && !!e_,
                  disabled: eH || !eW,
                  onClick: () => eW && ez(eW),
                  children: (0, n.jsxs)("span", {
                    className: T().stack,
                    children: [
                      (0, n.jsx)("span", {
                        className: T().stackItem,
                        "data-active": !(eM && e_) || void 0,
                        "aria-hidden": eM && !!e_,
                        children: "Show original"
                      }),
                      (0, n.jsx)("span", {
                        className: T().stackItem,
                        "data-active": eM && !!e_ || void 0,
                        "aria-hidden": !(eM && e_),
                        children: "Show translation"
                      })
                    ]
                  })
                })
              ]
            }),
            (0, n.jsx)("div", {
              className: T().status,
              children: (0, n.jsx)(o.N, {
                initial: false,
                children: (0, n.jsxs)(
                  d.PY1.span,
                  {
                    className: T().statusItem,
                    "data-tone": K.tone,
                    initial: !U && { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: { duration: 0.16, ease: L }
                    },
                    exit: { opacity: 0, transition: { duration: 0.1 * !U } },
                    children: [
                      "error" === K.tone ? (0, n.jsx)(m.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true",
                        className: T().errorIcon
                      }) : (0, n.jsx)("span", {
                        className: T().mark,
                        title: V.name,
                        children: V.mark ?? (0, n.jsx)(c.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      }),
                      K.shimmer ? (0, n.jsx)(_.n, {
                        className: T().statusText,
                        children: K.label
                      }) : (0, n.jsx)("span", {
                        className: T().statusText,
                        title: "error" === K.tone ? em ?? void 0 : void 0,
                        children: K.label
                      }),
                      "error" === K.tone && (0, n.jsxs)(f.$, {
                        variant: "ghost",
                        size: "sm",
                        className: T().retry,
                        onClick: () => ef((e3) => e3 + 1),
                        children: [
                          (0, n.jsx)(p.A, {
                            size: 14,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          "Retry"
                        ]
                      })
                    ]
                  },
                  K.key
                )
              })
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: T().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ex
        })
      ]
    });
  }
  var A = a(50680), P = a(44709), I = a.n(P);
  function B() {
    let [e2, t2] = (0, i.useState)(false), a2 = (0, i.useRef)(false), r2 = (e3) => {
      a2.current = e3, t2(e3);
    };
    async function s2({ to: e3, signal: t3 }) {
      if (await new Promise((e4, a3) => {
        let n3 = window.setTimeout(e4, 560);
        t3.addEventListener(
          "abort",
          () => {
            window.clearTimeout(n3), a3(new DOMException("Aborted", "AbortError"));
          },
          { once: true }
        );
      }), a2.current)
        throw r2(false), Error(
          "The translation service is rate limited. Try again in a moment."
        );
      let n2 = y[e3];
      if (!n2) throw Error("No translation for this language yet.");
      return n2;
    }
    return (0, n.jsxs)("div", {
      className: I().demo,
      children: [
        (0, n.jsx)(z, { translate: s2, autoPlay: true, simulated: true }),
        (0, n.jsx)("div", {
          className: I().controls,
          children: (0, n.jsx)(A.d, {
            label: "Fail the next translation",
            checked: e2,
            onCheckedChange: r2
          })
        })
      ]
    });
  }
  let D = B;
};

__m(__module,__exports,__require);
});
A.reg(25684, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => c });
  var n = r(51811);
  let a = {
    name: "languages",
    size: 24,
    node: [
      ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
      ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
      ["path", { d: "M2 5h12", key: "or177f" }],
      ["path", { d: "M7 2h1", key: "1t2jsx" }],
      ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
      ["path", { d: "M14 18h6", key: "1m8k6r" }]
    ]
  };
  a.node;
  let c = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.regCss(31154, ".ai-translate_root__tzYPd{container-type:inline-size;box-sizing:border-box;width:100%;max-width:620px;min-width:0;padding:20px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:20px}.ai-translate_srOnly__7fPgv{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.ai-translate_head__IHRG9{display:flex;min-height:36px;align-items:center;justify-content:space-between;gap:12px}.ai-translate_author__R0L3b{display:flex;min-width:0;align-items:center;gap:12px}.ai-translate_avatar__c9nVY{flex:none}.ai-translate_byline__ci524{display:grid;min-width:0}.ai-translate_meta__8Bqtz,.ai-translate_name__OXHLc{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ai-translate_name__OXHLc{font-weight:500;line-height:20px}.ai-translate_meta__8Bqtz{color:var(--text-muted);font-size:var(--text-xs);line-height:16px}.ai-translate_chip___Npu_{display:inline-flex;flex:none;height:24px;align-items:center;gap:4px;padding-inline:10px;border:1px solid var(--border-subtle);border-radius:var(--radius-pill);color:var(--foreground);font-size:var(--text-xs);line-height:16px;white-space:nowrap}.ai-translate_chipLabel__eVmm0{color:var(--text-muted)}.ai-translate_textClip__OLR_M{margin-block:14px 16px}.ai-translate_textStack___rtnF{display:grid}.ai-translate_text__PQLg_{grid-area:1/1;margin:0;color:var(--foreground);font-size:var(--text-base);line-height:24px;overflow-wrap:break-word;text-wrap:pretty}.ai-translate_empty__i9wPF{color:var(--text-muted)}.ai-translate_chunk__xkFJT{animation:ai-translate_ait-in__MRvt1 .14s cubic-bezier(.22,1,.36,1) both}.ai-translate_pending__mHa27{color:var(--text-secondary);animation:ai-translate_ait-dim__oyOW2 .2s cubic-bezier(.22,1,.36,1) both}.ai-translate_pendingStill__4W2jn{animation:none;opacity:.45}@keyframes ai-translate_ait-in__MRvt1{0%{opacity:0}to{opacity:1}}@keyframes ai-translate_ait-dim__oyOW2{0%{opacity:1}to{opacity:.45}}.ai-translate_foot__7Dzvx{display:flex;min-height:32px;align-items:center;justify-content:space-between;gap:8px 12px}.ai-translate_controls__ZJVs_{display:flex;min-width:0;align-items:center;gap:8px}.ai-translate_toggle___HrsG,.ai-translate_trigger__eA83s{display:inline-flex;height:32px;flex:none;align-items:center;gap:6px;margin:0;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);line-height:20px;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color .12s ease-out,border-color .12s ease-out,color .12s ease-out,transform .12s ease-out}.ai-translate_trigger__eA83s{padding-inline:10px 8px}.ai-translate_toggle___HrsG{padding-inline:12px;color:var(--text-secondary)}.ai-translate_toggle___HrsG[aria-pressed=true]{background:var(--surface-muted);border-color:var(--border);color:var(--foreground)}.ai-translate_toggle___HrsG:active:not(:disabled),.ai-translate_trigger__eA83s:active:not(:disabled){transform:scale(.97);background:var(--surface-muted)}.ai-translate_trigger__eA83s[data-state=open]{background:var(--surface-muted)}.ai-translate_toggle___HrsG:disabled,.ai-translate_trigger__eA83s:disabled{cursor:default;color:var(--text-muted);border-color:var(--border-subtle)}@media (hover:hover) and (pointer:fine){.ai-translate_toggle___HrsG:hover:not(:disabled),.ai-translate_trigger__eA83s:hover:not(:disabled){background:var(--surface-muted);color:var(--foreground)}}.ai-translate_triggerIcon__CE9dS{flex:none;color:var(--text-secondary)}.ai-translate_trigger__eA83s:disabled .ai-translate_triggerIcon__CE9dS{color:var(--text-muted)}.ai-translate_chevron__AtrRg{flex:none;color:var(--text-muted);transition:transform .2s cubic-bezier(.22,1,.36,1)}.ai-translate_trigger__eA83s[data-state=open] .ai-translate_chevron__AtrRg{transform:rotate(180deg)}.ai-translate_stack__kG4Hs{display:inline-grid;justify-items:start}.ai-translate_toggle___HrsG .ai-translate_stack__kG4Hs{justify-items:center}.ai-translate_stackItem__tBl4y{grid-area:1/1;opacity:0;white-space:nowrap;pointer-events:none;user-select:none;transition:opacity .1s ease-out}.ai-translate_stackItem__tBl4y[data-active]{opacity:1;pointer-events:auto;user-select:auto;transition:opacity .16s cubic-bezier(.22,1,.36,1)}.ai-translate_status__vvazg{display:grid;min-width:0;justify-items:end}.ai-translate_statusItem__KpJpZ{display:inline-flex;grid-area:1/1;min-width:0;max-width:100%;height:32px;align-items:center;gap:8px;color:var(--text-secondary);font-size:var(--text-xs);white-space:nowrap}.ai-translate_statusText__bBsmk{min-width:0;overflow:hidden;text-overflow:ellipsis}.ai-translate_mark__kXLdn{display:grid;flex:none;width:16px;height:16px;place-items:center}.ai-translate_mark__kXLdn svg{display:block;width:16px;height:16px}.ai-translate_errorIcon__on2wK{flex:none;color:var(--danger)}.ai-translate_statusItem__KpJpZ[data-tone=error]{color:var(--foreground)}.ai-translate_retry__xF_SW.ai-translate_retry__xF_SW{min-height:28px;gap:6px;margin-left:-2px;padding-inline:10px;font-size:var(--text-xs)}.ai-translate_menu__WRxRd{z-index:60;box-sizing:border-box;min-width:220px;padding:4px;border:1px solid var(--border);border-radius:16px;background:var(--surface-raised,var(--surface));box-shadow:var(--shadow-floating);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:20px;transform-origin:var(--radix-dropdown-menu-content-transform-origin)}.ai-translate_menu__WRxRd[data-state=open]{animation:ai-translate_ait-menu-in__8nB1o .15s cubic-bezier(.22,1,.36,1)}.ai-translate_menu__WRxRd[data-state=closed]{animation:ai-translate_ait-menu-out__5VmZ9 .1s ease-out forwards}@keyframes ai-translate_ait-menu-in__8nB1o{0%{opacity:0;transform:scale(.98)}}@keyframes ai-translate_ait-menu-out__5VmZ9{to{opacity:0;transform:scale(.98)}}.ai-translate_menuLabel__vaZE1{padding:6px 10px 4px;color:var(--text-muted);font-size:var(--text-xs);line-height:16px}.ai-translate_item__YDqyv{display:grid;height:32px;grid-template-columns:14px minmax(0,1fr) auto;align-items:center;gap:8px;padding-inline:8px 10px;border-radius:12px;cursor:pointer;user-select:none}.ai-translate_item__YDqyv[data-highlighted]{background:var(--surface-muted)}.ai-translate_itemCheck__V4ygV{display:grid;width:14px;height:14px;place-items:center;color:var(--foreground)}.ai-translate_itemName__6VL3s{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ai-translate_itemMeta__YLrva{color:var(--text-muted);font-size:var(--text-xs)}.ai-translate_item__YDqyv[data-state=checked] .ai-translate_itemName__6VL3s{font-weight:500}@media (max-width:420px){.ai-translate_root__tzYPd{padding:16px}}@media (prefers-reduced-motion:reduce){.ai-translate_chunk__xkFJT,.ai-translate_menu__WRxRd[data-state=closed],.ai-translate_menu__WRxRd[data-state=open]{animation:none}}@media (prefers-reduced-motion:reduce){.ai-translate_chevron__AtrRg,.ai-translate_stackItem__tBl4y,.ai-translate_stackItem__tBl4y[data-active],.ai-translate_toggle___HrsG,.ai-translate_trigger__eA83s{transition:none}}", {"root":"ai-translate_root__tzYPd","srOnly":"ai-translate_srOnly__7fPgv","head":"ai-translate_head__IHRG9","author":"ai-translate_author__R0L3b","avatar":"ai-translate_avatar__c9nVY","byline":"ai-translate_byline__ci524","name":"ai-translate_name__OXHLc","meta":"ai-translate_meta__8Bqtz","chip":"ai-translate_chip___Npu_","chipLabel":"ai-translate_chipLabel__eVmm0","textClip":"ai-translate_textClip__OLR_M","textStack":"ai-translate_textStack___rtnF","text":"ai-translate_text__PQLg_","empty":"ai-translate_empty__i9wPF","chunk":"ai-translate_chunk__xkFJT","ait-in":"ai-translate_ait-in__MRvt1","pending":"ai-translate_pending__mHa27","ait-dim":"ai-translate_ait-dim__oyOW2","pendingStill":"ai-translate_pendingStill__4W2jn","foot":"ai-translate_foot__7Dzvx","controls":"ai-translate_controls__ZJVs_","trigger":"ai-translate_trigger__eA83s","toggle":"ai-translate_toggle___HrsG","triggerIcon":"ai-translate_triggerIcon__CE9dS","chevron":"ai-translate_chevron__AtrRg","stack":"ai-translate_stack__kG4Hs","stackItem":"ai-translate_stackItem__tBl4y","status":"ai-translate_status__vvazg","statusItem":"ai-translate_statusItem__KpJpZ","statusText":"ai-translate_statusText__bBsmk","mark":"ai-translate_mark__kXLdn","errorIcon":"ai-translate_errorIcon__on2wK","retry":"ai-translate_retry__xF_SW","menu":"ai-translate_menu__WRxRd","ait-menu-in":"ai-translate_ait-menu-in__8nB1o","ait-menu-out":"ai-translate_ait-menu-out__5VmZ9","menuLabel":"ai-translate_menuLabel__vaZE1","item":"ai-translate_item__YDqyv","itemCheck":"ai-translate_itemCheck__V4ygV","itemName":"ai-translate_itemName__6VL3s","itemMeta":"ai-translate_itemMeta__YLrva"});
A.regCss(44709, ".demo{display:flex;width:100%;flex-direction:column;align-items:center;gap:16px}\n.controls{display:flex;width:100%;max-width:620px;justify-content:center;color:var(--text-secondary);font-size:var(--text-sm)}", {"demo":"demo","controls":"controls"});
A.cssFor("ai-translate", [31154,44709]);
A.item("ai-translate", {entry:13626, export:"AiTranslateDemo", kind:"component", tier:"pro", unresolved:[]});
})();