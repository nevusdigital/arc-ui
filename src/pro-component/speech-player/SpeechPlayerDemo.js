function(__module,__exports,__require){
"use strict";
const __m = (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { SpeechPlayerDemo: () => Q, default: () => ee });
  var a = r(95155), n = r(12115), i = r(80642), s = r(25354), o = r(18310), l = r(92298), d = r(41189), u = r(62818), c = r(70105), p = r(84614), h = r(35484), m = r(12363), f = r(64577), y = r(9005), g = r(73474), _ = r(83978), x = r(52898), v = r(36690), b = r(7770);
  let j = `Your flight to Lisbon leaves Thursday, October 29 at 7:40 from Zurich, gate A54. Check-in closes 40 minutes before departure, so plan to reach the airport by 6:15.

Lisbon looks warm, 21 degrees with a light breeze off the river. Your hotel in Pr\xEDncipe Real holds the room until midnight, and I added both confirmations to your calendar.`, w = [
    { id: "ava", name: "Ava", description: "Warm and conversational" },
    { id: "leo", name: "Leo", description: "Calm, lower register" },
    { id: "maya", name: "Maya", description: "Bright and quick" },
    { id: "noah", name: "Noah", description: "Steady narrator" }
  ], N = { ava: 1, leo: 0.93, maya: 1.08, noah: 0.97 };
  function k(e2) {
    let t2 = [], r2 = 0;
    for (let a2 of e2.trim().split(/\n\s*\n/)) {
      let e3 = a2.split(/\s+/).filter(Boolean).map((e4) => ({ text: e4, index: r2++, paragraph: t2.length }));
      e3.length && t2.push(e3);
    }
    return { paragraphs: t2, words: t2.flat() };
  }
  function T(e2, t2 = 1) {
    let { paragraphs: r2 } = k(e2), a2 = [], n2 = 140;
    return r2.forEach((e3, i2) => {
      e3.forEach((s2, o2) => {
        let l2 = 150 + 36 * s2.text.replace(/[^\p{L}]/gu, "").length + 82 * s2.text.replace(/[^\p{N}]/gu, "").length;
        a2.push({ start: Math.round(n2), end: Math.round(n2 + l2 / t2) }), n2 += l2 / t2;
        let d2 = o2 === e3.length - 1 && i2 < r2.length - 1 ? 560 : /[.!?]["')”]?$/.test(s2.text) ? 360 : /[,;:]$/.test(s2.text) ? 190 : 22;
        n2 += d2 / t2;
      });
    }), { timings: a2, duration: Math.round(n2 + 160) };
  }
  function C() {
    return new DOMException("The request was aborted.", "AbortError");
  }
  function S({ text: e2, voice: t2, signal: r2 }, { delay: a2 = 640, fail: n2 = false } = {}) {
    return new Promise((i2, s2) => {
      if (r2.aborted) return void s2(C());
      let o2 = window.setTimeout(() => {
        (r2.removeEventListener("abort", l2), n2) ? s2(Error(`${t2.name} timed out. Simulated, nothing was sent.`)) : i2(T(e2, N[t2.id] ?? 1));
      }, a2);
      function l2() {
        window.clearTimeout(o2), s2(C());
      }
      r2.addEventListener("abort", l2, { once: true });
    });
  }
  var E = r(84958), P = r.n(E);
  let R = [1, 1.5, 2], A = {
    name: "Claude Sonnet 5.5",
    mark: (0, a.jsx)(
      function({ title: e2 = "Claude", ...t2 }) {
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
      },
      { style: { color: "#D97757" } }
    )
  }, L = [
    { voice: "ava", speed: 1 },
    { voice: "leo", speed: 1.5 }
  ], $ = { id: "default", name: "Default" }, O = (...e2) => e2.filter(Boolean).join(" "), M = (e2) => `${e2}\xD7`, D = (e2, t2, r2) => Math.min(r2, Math.max(t2, e2));
  function z(e2) {
    let t2 = Math.max(0, Math.floor(e2 / 1e3));
    return `${Math.floor(t2 / 60)}:${String(t2 % 60).padStart(2, "0")}`;
  }
  let B = (e2) => e2 instanceof DOMException && "AbortError" === e2.name, W = (e2) => e2 ? { duration: 0 } : {
    duration: b.T.duration.fast,
    ease: [...b.T.ease.enter],
    delay: 0.04
  }, I = (e2) => e2 ? { duration: 0 } : { duration: 0.1, ease: [...b.T.ease.standard] }, V = (e2, t2) => ({
    animate: { opacity: +!!e2, y: e2 || t2 ? 0 : 2 },
    transition: e2 ? W(t2) : I(t2)
  });
  function Y() {
    return (0, a.jsxs)("svg", {
      className: P().spinner,
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, a.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          stroke: "currentColor",
          strokeOpacity: ".3",
          strokeWidth: "1.75"
        }),
        (0, a.jsx)("path", {
          d: "M8 2a6 6 0 0 1 6 6",
          stroke: "currentColor",
          strokeWidth: "1.75",
          strokeLinecap: "round"
        })
      ]
    });
  }
  function F() {
    return (0, a.jsx)("svg", {
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "currentColor",
      "aria-hidden": "true",
      children: (0, a.jsx)("path", {
        d: "M5.25 3.6v8.8a.75.75 0 0 0 1.14.64l7.1-4.4a.75.75 0 0 0 0-1.28l-7.1-4.4a.75.75 0 0 0-1.14.64Z"
      })
    });
  }
  function q() {
    return (0, a.jsxs)("svg", {
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "currentColor",
      "aria-hidden": "true",
      children: [
        (0, a.jsx)("rect", {
          x: "4.25",
          y: "3.25",
          width: "2.75",
          height: "9.5",
          rx: ".9"
        }),
        (0, a.jsx)("rect", {
          x: "9",
          y: "3.25",
          width: "2.75",
          height: "9.5",
          rx: ".9"
        })
      ]
    });
  }
  let K = {
    play: "Play",
    pause: "Pause",
    replay: "Play again",
    retry: "Retry",
    loading: "Preparing audio"
  };
  function U({ mode: e2, reduced: t2 }) {
    let r2 = "pause" === e2 ? (0, a.jsx)(q, {}) : "loading" === e2 ? (0, a.jsx)(Y, {}) : "replay" === e2 ? (0, a.jsx)(l.A, {
      size: 16,
      strokeWidth: 2,
      "aria-hidden": "true"
    }) : "retry" === e2 ? (0, a.jsx)(d.A, {
      size: 16,
      strokeWidth: 2,
      "aria-hidden": "true"
    }) : (0, a.jsx)(F, {});
    return (0, a.jsx)(i.N, {
      initial: false,
      children: (0, a.jsx)(
        s.PY1.span,
        {
          className: P().playIcon,
          initial: t2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
          animate: { opacity: 1, scale: 1 },
          exit: t2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, scale: 0.6, transition: { duration: 0.1 } },
          transition: t2 ? { duration: 0 } : {
            ...b.T.spring.snappy,
            opacity: { duration: b.T.duration.instant }
          },
          children: r2
        },
        e2
      )
    });
  }
  function Z({ text: e2, announce: t2 }) {
    let [r2, i2] = (0, n.useState)(null), s2 = (e3) => {
      let a2 = r2 === e3 ? null : e3;
      i2(a2), t2(
        a2 ? `Marked as a ${a2} response. Simulated, nothing was sent.` : "Feedback removed."
      );
    };
    return (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)(g.CopyButton, {
          value: e2,
          label: "Copy reply",
          iconOnly: true,
          variant: "plain",
          className: P().copy
        }),
        (0, a.jsx)(v.m, {
          content: "Good response",
          children: (0, a.jsx)("button", {
            type: "button",
            className: P().iconButton,
            "aria-label": "Good response",
            "aria-pressed": "good" === r2,
            onClick: () => s2("good"),
            children: (0, a.jsx)(u.A, {
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            })
          })
        }),
        (0, a.jsx)(v.m, {
          content: "Bad response",
          children: (0, a.jsx)("button", {
            type: "button",
            className: P().iconButton,
            "aria-label": "Bad response",
            "aria-pressed": "bad" === r2,
            onClick: () => s2("bad"),
            children: (0, a.jsx)(c.A, {
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            })
          })
        })
      ]
    });
  }
  function G(e2) {
    let {
      text: t2,
      author: r2,
      voices: l2,
      voice: d2,
      defaultVoice: u2,
      onVoiceChange: c2,
      speed: g2,
      defaultSpeed: b2 = 1,
      onSpeedChange: N2,
      synthesize: C2,
      simulated: E2,
      autoPlay: Y2,
      actions: F2,
      variant: q2 = "card",
      className: G2
    } = e2, H2 = void 0 === t2, X2 = t2 ?? j, J2 = l2?.length ? l2 : w, Q2 = void 0 === r2 ? H2 ? A : null : r2, ee2 = E2 ?? !C2, et = Y2 ?? H2, er = (0, o.I)() ?? false, ea = (0, n.useId)(), [en, ei] = (0, n.useState)(u2 ?? J2[0]?.id ?? $.id), es = d2 ?? en, eo = J2.find((e3) => e3.id === es) ?? J2[0] ?? $, [el, ed] = (0, n.useState)(b2), eu = g2 ?? el, { paragraphs: ec, words: ep } = (0, n.useMemo)(() => k(X2), [X2]), [eh, em] = (0, n.useState)(false), [ef, ey] = (0, n.useState)("idle"), [eg, e_] = (0, n.useState)(-1), [ex, ev] = (0, n.useState)(0), [eb, ej] = (0, n.useState)(0), [ew, eN] = (0, n.useState)(""), [ek, eT] = (0, n.useState)(""), [eC, eS] = (0, n.useState)(""), [eE, eP] = (0, n.useState)(false), [eR, eA] = (0, n.useState)(), eL = (0, n.useRef)(null), e$ = (0, n.useRef)(null), eO = (0, n.useRef)(null), eM = (0, n.useRef)(null), eD = (0, n.useRef)(null), ez = (0, n.useRef)(null), eB = (0, n.useRef)(null), eW = (0, n.useRef)(null), eI = (0, n.useRef)(null), eV = (0, n.useRef)(null), eY = (0, n.useRef)([]), eF = (0, n.useRef)({
      status: "idle",
      open: false,
      time: 0,
      duration: 0,
      timings: [],
      audio: null,
      raf: 0,
      last: 0,
      word: -1,
      second: -1,
      speed: b2,
      loadedVoice: null,
      requestedVoice: null,
      resumeAfterLoad: false,
      controller: null,
      dragging: false,
      reduced: false,
      highlightTop: null,
      focus: null,
      interacted: false,
      autoPaused: false,
      timers: [],
      onAutoEnd: null
    }), eq = (0, n.useRef)({
      text: X2,
      words: ep,
      voice: eo,
      voices: J2,
      synthesize: C2,
      simulated: ee2,
      props: e2
    });
    (0, n.useLayoutEffect)(() => {
      eq.current = {
        text: X2,
        words: ep,
        voice: eo,
        voices: J2,
        synthesize: C2,
        simulated: ee2,
        props: e2
      }, eF.current.reduced = er;
    });
    let eK = (0, n.useCallback)((e3) => eS(e3), []), eU = (0, n.useMemo)(() => {
      let e3 = (e7) => {
        eF.current.status = e7, ey(e7);
      }, t3 = () => {
        let e7 = eF.current;
        return {
          time: Math.round(e7.time),
          duration: e7.duration,
          wordIndex: e7.word,
          voice: eq.current.voice,
          speed: e7.speed
        };
      }, r3 = (e7) => {
        let r4 = eF.current;
        if (e7 === r4.word) return;
        r4.word = e7, e_(e7);
        let a3 = eq.current.words[e7];
        a3 && eq.current.props.onWordChange?.({ ...t3(), word: a3.text });
      }, a2 = (e7) => {
        let t4 = eF.current, r4 = t4.duration ? D(e7 / t4.duration, 0, 1) : 0;
        eM.current && (eM.current.style.transform = `scaleX(${r4})`), eD.current && (eD.current.style.transform = `translateX(${100 * r4}%)`);
      }, n2 = (e7) => {
        let t4 = eF.current;
        a2(e7);
        let n3 = Math.floor(e7 / 1e3);
        n3 !== t4.second && (t4.second = n3, ev(n3)), r3(
          (function(e8, t5) {
            let r4 = 0, a3 = e8.length - 1, n4 = -1;
            for (; r4 <= a3; ) {
              let i3 = r4 + a3 >> 1;
              e8[i3].start <= t5 ? (n4 = i3, r4 = i3 + 1) : a3 = i3 - 1;
            }
            return n4;
          })(t4.timings, e7)
        );
      }, i2 = () => {
        cancelAnimationFrame(eF.current.raf), eF.current.raf = 0;
      }, s2 = () => {
        let a3 = eF.current;
        i2(), a3.audio?.pause(), a3.time = a3.duration, n2(a3.duration), r3(-1), e3("ended"), eq.current.props.onEnd?.(t3()), eK("Finished reading."), a3.interacted || a3.onAutoEnd?.();
      }, o2 = (e7) => {
        let t4 = eF.current;
        if ("playing" === t4.status) {
          if (!t4.dragging) {
            let r4 = t4.audio ? 1e3 * t4.audio.currentTime : t4.time + (e7 - t4.last) * t4.speed;
            if (r4 >= t4.duration) return void s2();
            t4.time = r4, n2(r4);
          }
          t4.last = e7, t4.raf = requestAnimationFrame(o2);
        }
      }, l3 = (t4) => {
        i2(), eF.current.audio?.pause(), e3("error"), eN(t4), eK(`Couldn't generate audio. ${t4}`);
      }, d3 = () => {
        let r4 = eF.current;
        r4.timings.length && (r4.time >= r4.duration && (r4.time = 0, n2(0)), e3("playing"), r4.last = performance.now(), r4.audio && (r4.audio.playbackRate = r4.speed, Math.abs(1e3 * r4.audio.currentTime - r4.time) > 40 && (r4.audio.currentTime = r4.time / 1e3), r4.audio.play().catch((t4) => {
          if (t4 instanceof DOMException && "NotAllowedError" === t4.name) {
            i2(), e3("paused"), eK("Press play to start the audio.");
            return;
          }
          B(t4) || l3("The audio could not be played.");
        })), i2(), r4.raf = requestAnimationFrame(o2), eq.current.props.onPlay?.(t3()), eK(
          `Reading aloud with ${eq.current.voice.name} at ${M(r4.speed)}.${eq.current.simulated ? " Simulated, no audio plays." : ""}`
        ));
      }, u3 = () => {
        let r4 = eF.current;
        "playing" === r4.status && (i2(), r4.audio?.pause(), e3("paused"), eq.current.props.onPause?.(t3()), eK(`Paused at ${z(r4.time)}.`));
      }, c3 = () => {
        "playing" === eF.current.status && s2();
      }, p2 = () => l3("The audio could not be loaded."), h2 = () => {
        let e7 = eF.current.audio;
        e7 && (e7.pause(), e7.removeEventListener("ended", c3), e7.removeEventListener("error", p2), e7.removeAttribute("src"), e7.load(), eF.current.audio = null);
      }, m2 = async (t4, r4, a3) => {
        let s3 = eF.current, o3 = eq.current, u4 = a3 ?? o3.voice;
        s3.controller?.abort();
        let m3 = new AbortController();
        s3.controller = m3, i2(), s3.audio?.pause();
        let f3 = null !== s3.loadedVoice && s3.loadedVoice !== u4.id && s3.open && s3.word >= 0;
        s3.requestedVoice = u4.id, s3.resumeAfterLoad = t4, eN(""), eT(f3 ? `Switching to ${u4.name}` : `Preparing ${u4.name}'s voice`), e3("loading"), eK(
          f3 ? `Switching to ${u4.name}.` : `Preparing ${u4.name}'s voice.`
        );
        let y2 = o3.synthesize ?? ((e7) => S(e7, { delay: f3 ? 460 : 640 }));
        try {
          let a4 = await y2({ text: o3.text, voice: u4, signal: m3.signal });
          if (m3.signal.aborted) return;
          let i3 = a4.timings, l4 = a4.duration, f4 = null;
          if (a4.src) {
            let e7 = new Audio();
            if (e7.preload = "auto", e7.src = a4.src, f4 = e7, !i3 || void 0 === l4) {
              if (await new Promise((t5, r5) => {
                e7.readyState >= 1 ? t5() : (e7.addEventListener("loadedmetadata", () => t5(), {
                  once: true
                }), e7.addEventListener(
                  "error",
                  () => r5(Error("The audio could not be loaded.")),
                  { once: true }
                ));
              }), m3.signal.aborted)
                return;
              void 0 === l4 && Number.isFinite(e7.duration) && (l4 = 1e3 * e7.duration);
            }
          }
          if (!i3) {
            let e7 = T(o3.text);
            i3 = l4 ? (function(e8, t5) {
              let r5 = e8.at(-1)?.end ?? 0;
              if (!r5 || !t5) return e8;
              let a5 = Math.max(0.1, (t5 - 120) / r5);
              return e8.map(({ start: e9, end: t6 }) => ({
                start: Math.round(e9 * a5),
                end: Math.round(t6 * a5)
              }));
            })(e7.timings, l4) : e7.timings, l4 ?? (l4 = e7.duration);
          }
          l4 ?? (l4 = (i3.at(-1)?.end ?? 0) + 240), h2(), f4 && (f4.playbackRate = s3.speed, f4.addEventListener("ended", c3), f4.addEventListener("error", p2)), s3.audio = f4, s3.timings = i3, s3.duration = l4, s3.loadedVoice = u4.id, s3.controller = null, s3.second = -1, ej(l4), s3.time = r4 >= 0 && i3[r4] ? i3[r4].start : 0, n2(s3.time), t4 ? d3() : e3("paused");
        } catch (e7) {
          if (m3.signal.aborted || B(e7)) return;
          s3.controller = null, l3(
            e7 instanceof Error && e7.message ? e7.message : "Something went wrong."
          );
        }
      }, f2 = (t4) => {
        let n3 = eF.current;
        n3.controller?.abort(), n3.controller = null, i2(), n3.audio?.pause(), n3.requestedVoice = n3.loadedVoice, n3.time = 0, n3.second = -1, r3(-1), ev(0), eN(""), a2(0), e3("idle"), n3.open = false, em(false), t4 && eL.current?.contains(document.activeElement) && (n3.focus = "read"), eq.current.props.onClose?.(), eK("Stopped reading.");
      };
      return {
        play: d3,
        pause: u3,
        seek: (r4, a3) => {
          let i3 = eF.current;
          if (!i3.duration) return;
          let s3 = D(r4, 0, i3.duration);
          i3.time = s3, i3.last = performance.now(), i3.audio && (i3.audio.currentTime = s3 / 1e3), "ended" === i3.status && s3 < i3.duration && e3("paused"), n2(s3), a3 && eq.current.props.onSeek?.(t3());
        },
        load: m2,
        start: (e7, t4) => {
          let r4 = eF.current;
          r4.open = true, em(true), e7 && (r4.focus = "play");
          let a3 = t4 ?? eq.current.voice;
          r4.loadedVoice === a3.id && r4.timings.length ? (r4.time = 0, r4.second = -1, n2(0), d3()) : m2(true, -1, t4);
        },
        toggle: () => {
          let e7 = eF.current;
          if ("playing" === e7.status) u3();
          else {
            if ("loading" === e7.status) return;
            "error" === e7.status || e7.loadedVoice !== eq.current.voice.id ? m2(true, e7.word) : d3();
          }
        },
        close: f2,
        reset: () => {
          let e7 = eF.current;
          e7.open && f2(false), h2(), e7.timings = [], e7.duration = 0, e7.loadedVoice = null, e7.requestedVoice = null, ej(0);
        },
        dispose: () => {
          eF.current.controller?.abort(), i2(), h2();
        }
      };
    }, [eK]);
    (0, n.useEffect)(() => {
      let e3 = eF.current;
      e3.speed = eu, e3.last = performance.now(), e3.audio && (e3.audio.playbackRate = eu);
    }, [eu]), (0, n.useEffect)(() => {
      let e3 = eF.current;
      if (!e3.open || "idle" === e3.status || e3.requestedVoice === es) return;
      let t3 = "playing" === e3.status || "loading" === e3.status && e3.resumeAfterLoad;
      eU.load(t3, e3.word);
    }, [es, eU]), (0, n.useEffect)(() => {
      eU.reset();
    }, [X2, eU]), (0, n.useEffect)(() => () => eU.dispose(), [eU]), (0, n.useEffect)(() => {
      let e3 = eF.current;
      "play" === e3.focus && eh && eB.current?.focus(), "read" !== e3.focus || eh || eW.current?.focus(), e3.focus = null;
    }, [eh]);
    let eZ = (0, n.useCallback)((e3) => {
      let t3 = eF.current, r3 = eO.current;
      if (!r3) return;
      let a2 = t3.word >= 0 ? eY.current[t3.word] : null;
      if (!(t3.open && a2 && ("playing" === t3.status || "paused" === t3.status || "loading" === t3.status)) || !a2) {
        r3.dataset.visible = "false", t3.highlightTop = null;
        return;
      }
      let n2 = a2.offsetLeft - 3, i2 = a2.offsetTop - 1, s2 = a2.offsetWidth + 6, o2 = a2.offsetHeight + 2, l3 = e3 || t3.reduced || "true" !== r3.dataset.visible || null === t3.highlightTop || Math.abs(i2 - t3.highlightTop) > 2;
      l3 && (r3.dataset.snap = "true"), r3.style.transform = `translate3d(${n2}px, ${i2}px, 0)`, r3.style.width = `${s2}px`, r3.style.height = `${o2}px`, r3.dataset.visible = "true", t3.highlightTop = i2, l3 && (r3.offsetWidth, delete r3.dataset.snap);
    }, []);
    (0, n.useLayoutEffect)(() => {
      eZ(false);
    }, [eg, eh, ef, eZ]), (0, n.useEffect)(() => {
      let e3 = e$.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = e3.offsetWidth, r3 = new ResizeObserver(() => {
        e3.offsetWidth !== t3 && (t3 = e3.offsetWidth, eZ(true));
      });
      return r3.observe(e3), () => r3.disconnect();
    }, [eZ]);
    let eG = (0, n.useCallback)(() => {
      let e3 = eV.current;
      e3 && eA(Math.ceil(e3.getBoundingClientRect().width));
    }, []);
    (0, n.useLayoutEffect)(eG, [eo.name, eG]), (0, n.useEffect)(() => {
      let e3 = eV.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(eG);
      return t3.observe(e3), () => t3.disconnect();
    }, [eG]), (0, n.useEffect)(() => {
      let e3 = eL.current;
      if (!et || !e3 || "u" < typeof IntersectionObserver) return;
      let t3 = eF.current, r3 = false, a2 = null, n2 = 0, i2 = (e7, n3) => {
        t3.timers.push(
          window.setTimeout(() => {
            t3.interacted || (r3 ? e7() : a2 = e7);
          }, n3)
        );
      }, s2 = (e7) => {
        let r4 = eq.current, a3 = H2 && void 0 === r4.props.voice && void 0 === r4.props.speed ? L[e7 % L.length] : null, n3 = a3 ? r4.voices.find((e8) => e8.id === a3.voice) : void 0;
        a3 && n3 && (t3.speed = a3.speed, ed(a3.speed), ei(n3.id)), eU.start(false, n3);
      };
      t3.onAutoEnd = H2 && !t3.reduced ? () => {
        i2(() => eU.close(false), 1800), i2(() => {
          s2(n2 += 1);
        }, 3e3);
      } : null;
      let o2 = new IntersectionObserver(
        ([e7]) => {
          if (r3 = !!e7?.isIntersecting) {
            if (t3.autoPaused && !t3.interacted && (t3.autoPaused = false, eU.play()), a2 && !t3.interacted) {
              let e8 = a2;
              a2 = null, e8();
            }
          } else
            "playing" !== t3.status || t3.interacted || (t3.autoPaused = true, eU.pause());
        },
        { threshold: 0.4 }
      );
      return o2.observe(e3), i2(() => s2(0), 900), () => {
        o2.disconnect(), t3.timers.forEach((e7) => window.clearTimeout(e7)), t3.timers = [], t3.onAutoEnd = null;
      };
    }, [et, H2, eU]);
    let eH = () => {
      let e3 = eF.current;
      e3.interacted || (e3.interacted = true, e3.autoPaused = false, e3.timers.forEach((e7) => window.clearTimeout(e7)), e3.timers = []);
    }, eX = (e3) => {
      let t3 = ez.current;
      if (!t3) return 0;
      let r3 = t3.getBoundingClientRect();
      return D((e3 - r3.left) / r3.width, 0, 1) * eF.current.duration;
    }, eJ = (e3) => {
      eF.current.dragging && (eF.current.dragging = false, delete e3.currentTarget.dataset.dragging, e3.currentTarget.hasPointerCapture(e3.pointerId) && e3.currentTarget.releasePointerCapture(e3.pointerId), eU.seek(eX(e3.clientX), true));
    }, eQ = "playing" === ef ? "pause" : "loading" === ef ? "loading" : "ended" === ef ? "replay" : "error" === ef ? "retry" : "play", e0 = "loading" === ef ? "loading" : "error" === ef ? "error" : "timeline", e1 = eh && ("playing" === ef || "paused" === ef || "loading" === ef || "error" === ef && eg >= 0), e22 = eh && ("playing" === ef || "paused" === ef || "ended" === ef), e5 = z(eb), e4 = z(Math.min(1e3 * ex, eb)), e6 = { "--sp-move": `${Math.round(150 / eu)}ms` };
    return (0, a.jsxs)("div", {
      ref: eL,
      className: O(P().root, "plain" === q2 && P().plain, G2),
      style: e6,
      "data-reading": e1 || void 0,
      "data-seekable": e22 || void 0,
      "data-status": ef,
      onPointerDownCapture: eH,
      onKeyDownCapture: eH,
      children: [
        Q2 ? (0, a.jsxs)("div", {
          className: P().author,
          children: [
            Q2.mark ? (0, a.jsx)("span", {
              className: P().mark,
              "aria-hidden": "true",
              children: Q2.mark
            }) : null,
            (0, a.jsx)("span", {
              className: P().authorName,
              children: Q2.name
            })
          ]
        }) : null,
        (0, a.jsxs)("div", {
          ref: e$,
          id: `${ea}-text`,
          className: P().text,
          onClick: (e3) => {
            let t3 = eF.current;
            if (!t3.open || "playing" !== t3.status && "paused" !== t3.status && "ended" !== t3.status || window.getSelection()?.toString())
              return;
            let r3 = e3.target.closest("[data-word]"), a2 = r3 ? Number(r3.dataset.word) : NaN, n2 = t3.timings[a2];
            if (!n2) return;
            let i2 = "ended" === t3.status;
            eU.seek(n2.start, true), i2 && eU.play();
          },
          children: [
            (0, a.jsx)("span", {
              ref: eO,
              className: P().highlight,
              "data-visible": "false",
              "aria-hidden": "true"
            }),
            ec.length ? ec.map(
              (e3, t3) => (0, a.jsx)(
                "p",
                {
                  className: P().paragraph,
                  children: e3.map(
                    (e7, t4) => (0, a.jsxs)(
                      n.Fragment,
                      {
                        children: [
                          t4 ? " " : null,
                          (0, a.jsx)("span", {
                            ref: (t5) => {
                              eY.current[e7.index] = t5;
                            },
                            className: P().word,
                            "data-word": e7.index,
                            "data-state": e1 ? e7.index < eg ? "spoken" : e7.index === eg ? "current" : "upcoming" : void 0,
                            children: e7.text
                          })
                        ]
                      },
                      e7.index
                    )
                  )
                },
                t3
              )
            ) : (0, a.jsx)("p", {
              className: O(P().paragraph, P().empty),
              children: "Nothing to read yet."
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: P().dock,
          children: [
            (0, a.jsxs)(s.PY1.div, {
              className: P().actions,
              inert: eh,
              "aria-hidden": eh || void 0,
              initial: false,
              ...V(!eh, er),
              children: [
                (0, a.jsxs)("button", {
                  ref: eW,
                  type: "button",
                  className: P().readAloud,
                  onClick: () => eU.start(true),
                  disabled: !ep.length,
                  "aria-describedby": `${ea}-text`,
                  children: [
                    (0, a.jsx)(p.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    (0, a.jsx)("span", { children: "Read aloud" })
                  ]
                }),
                void 0 === F2 ? (0, a.jsx)(Z, { text: X2, announce: eK }) : F2
              ]
            }),
            (0, a.jsxs)(s.PY1.div, {
              className: P().player,
              role: "group",
              "aria-label": "Read aloud player",
              inert: !eh,
              "aria-hidden": !eh || void 0,
              initial: false,
              ...V(eh, er),
              children: [
                (0, a.jsx)("button", {
                  ref: eB,
                  type: "button",
                  className: P().play,
                  "data-mode": eQ,
                  "aria-label": K[eQ],
                  "aria-disabled": "loading" === eQ || void 0,
                  onClick: eU.toggle,
                  children: (0, a.jsx)(U, { mode: eQ, reduced: er })
                }),
                (0, a.jsxs)("div", {
                  className: P().middle,
                  children: [
                    (0, a.jsxs)(s.PY1.div, {
                      className: P().slot,
                      inert: "timeline" !== e0,
                      "aria-hidden": "timeline" !== e0 || void 0,
                      initial: false,
                      ...V("timeline" === e0, er),
                      children: [
                        (0, a.jsx)("span", {
                          className: O(P().time, P().elapsed),
                          "aria-hidden": "true",
                          children: e4
                        }),
                        (0, a.jsxs)("div", {
                          ref: ez,
                          className: P().scrub,
                          role: "slider",
                          tabIndex: 0,
                          "aria-label": "Seek",
                          "aria-valuemin": 0,
                          "aria-valuemax": Math.floor(eb / 1e3),
                          "aria-valuenow": Math.min(ex, Math.floor(eb / 1e3)),
                          "aria-valuetext": `${e4} of ${e5}`,
                          onPointerDown: (e3) => {
                            0 === e3.button && (e3.currentTarget.setPointerCapture(e3.pointerId), eF.current.dragging = true, e3.currentTarget.dataset.dragging = "true", eU.seek(eX(e3.clientX), false));
                          },
                          onPointerMove: (e3) => {
                            eF.current.dragging && eU.seek(eX(e3.clientX), false);
                          },
                          onPointerUp: eJ,
                          onPointerCancel: eJ,
                          onKeyDown: (e3) => {
                            let t3 = eF.current, r3 = {
                              ArrowRight: 2e3,
                              ArrowUp: 2e3,
                              ArrowLeft: -2e3,
                              ArrowDown: -2e3,
                              PageUp: 1e4,
                              PageDown: -1e4
                            }[e3.key];
                            if (void 0 !== r3) {
                              e3.preventDefault(), eU.seek(t3.time + r3, true);
                              return;
                            }
                            if ("Home" === e3.key) {
                              e3.preventDefault(), eU.seek(0, true);
                              return;
                            }
                            if ("End" === e3.key) {
                              e3.preventDefault(), eU.seek(t3.duration, true);
                              return;
                            }
                            (" " === e3.key || "k" === e3.key) && (e3.preventDefault(), eU.toggle());
                          },
                          children: [
                            (0, a.jsx)("span", {
                              className: P().track,
                              children: (0, a.jsx)("span", {
                                ref: eM,
                                className: P().fill
                              })
                            }),
                            (0, a.jsx)("span", {
                              ref: eD,
                              className: P().thumbRail,
                              children: (0, a.jsx)("span", {
                                className: P().thumb
                              })
                            })
                          ]
                        }),
                        (0, a.jsx)("span", {
                          className: O(P().time, P().total),
                          "aria-hidden": "true",
                          children: e5
                        })
                      ]
                    }),
                    (0, a.jsx)(s.PY1.div, {
                      className: O(P().slot, P().message),
                      "aria-hidden": "true",
                      initial: false,
                      ...V("loading" === e0, er),
                      children: (0, a.jsx)(x.n, {
                        active: "loading" === e0 && !er,
                        className: O(P().messageText, P().shimmer),
                        children: ek || `Preparing ${eo.name}'s voice`
                      })
                    }),
                    (0, a.jsxs)(s.PY1.div, {
                      className: O(P().slot, P().message, P().error),
                      "aria-hidden": "true",
                      initial: false,
                      ...V("error" === e0, er),
                      children: [
                        (0, a.jsx)(h.A, {
                          size: 14,
                          strokeWidth: 2,
                          "aria-hidden": "true"
                        }),
                        (0, a.jsxs)("span", {
                          className: P().messageText,
                          children: [
                            (0, a.jsx)("span", {
                              className: P().errorLong,
                              children: "Couldn't generate audio"
                            }),
                            (0, a.jsx)("span", {
                              className: P().errorShort,
                              children: "Audio failed"
                            })
                          ]
                        }),
                        ew ? (0, a.jsx)("span", {
                          className: P().errorDetail,
                          title: ew,
                          children: ew
                        }) : null
                      ]
                    })
                  ]
                }),
                (0, a.jsx)(v.m, {
                  content: "Playback speed",
                  children: (0, a.jsxs)("button", {
                    type: "button",
                    className: P().speed,
                    onClick: () => {
                      let e3 = R[(R.indexOf(eu) + 1) % R.length];
                      eF.current.speed = e3, void 0 === g2 && ed(e3), N2?.(e3), eK(`Speed ${M(e3)}.`);
                    },
                    "aria-label": `Playback speed ${M(eu)}`,
                    children: [
                      R.map(
                        (e3) => (0, a.jsx)(
                          "span",
                          {
                            className: P().measure,
                            "aria-hidden": "true",
                            children: M(e3)
                          },
                          e3
                        )
                      ),
                      (0, a.jsx)(i.N, {
                        initial: false,
                        children: (0, a.jsx)(
                          s.PY1.span,
                          {
                            className: P().swap,
                            "aria-hidden": "true",
                            initial: er ? { opacity: 0 } : { opacity: 0, y: 2 },
                            animate: { opacity: 1, y: 0 },
                            exit: {
                              opacity: 0,
                              y: er ? 0 : -2,
                              transition: I(er)
                            },
                            transition: W(er),
                            children: M(eu)
                          },
                          eu
                        )
                      })
                    ]
                  })
                }),
                (0, a.jsxs)(_.AM, {
                  open: eE,
                  onOpenChange: eP,
                  children: [
                    (0, a.jsxs)(_.Wv, {
                      className: P().voice,
                      "aria-label": `Voice: ${eo.name}`,
                      children: [
                        (0, a.jsxs)("span", {
                          className: P().voiceName,
                          style: eR ? { width: eR } : void 0,
                          children: [
                            (0, a.jsx)("span", {
                              ref: eV,
                              className: P().voiceProbe,
                              "aria-hidden": "true",
                              children: eo.name
                            }),
                            (0, a.jsx)(i.N, {
                              initial: false,
                              children: (0, a.jsx)(
                                s.PY1.span,
                                {
                                  className: P().swap,
                                  "aria-hidden": "true",
                                  initial: er ? { opacity: 0 } : { opacity: 0, y: 2 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: {
                                    opacity: 0,
                                    y: er ? 0 : -2,
                                    transition: I(er)
                                  },
                                  transition: W(er),
                                  children: eo.name
                                },
                                eo.id
                              )
                            })
                          ]
                        }),
                        (0, a.jsx)(m.A, {
                          className: P().chevron,
                          size: 14,
                          strokeWidth: 2,
                          "aria-hidden": "true"
                        })
                      ]
                    }),
                    (0, a.jsxs)(_.hl, {
                      side: "top",
                      align: "end",
                      sideOffset: 8,
                      className: P().menu,
                      onOpenAutoFocus: (e3) => {
                        e3.preventDefault(), eI.current?.querySelector("[aria-checked=true]")?.focus();
                      },
                      children: [
                        (0, a.jsx)("div", {
                          ref: eI,
                          role: "menu",
                          "aria-label": "Voice",
                          onKeyDown: (e3) => {
                            let t3 = Array.from(
                              eI.current?.querySelectorAll(
                                "[role=menuitemradio]"
                              ) ?? []
                            ), r3 = t3.indexOf(document.activeElement), a2 = { ArrowDown: 1, ArrowUp: -1 }[e3.key];
                            void 0 !== a2 ? (e3.preventDefault(), t3[(r3 + a2 + t3.length) % t3.length]?.focus()) : "Home" === e3.key ? (e3.preventDefault(), t3[0]?.focus()) : "End" === e3.key && (e3.preventDefault(), t3.at(-1)?.focus());
                          },
                          children: J2.map(
                            (e3) => (0, a.jsxs)(
                              "button",
                              {
                                type: "button",
                                role: "menuitemradio",
                                "aria-checked": e3.id === eo.id,
                                className: P().menuItem,
                                onClick: () => {
                                  eP(false), e3.id !== eo.id && (void 0 === d2 && ei(e3.id), c2?.(e3), !eF.current.open && eK(`Voice set to ${e3.name}.`));
                                },
                                children: [
                                  (0, a.jsxs)("span", {
                                    className: P().menuText,
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: P().menuName,
                                        children: e3.name
                                      }),
                                      e3.description ? (0, a.jsx)("span", {
                                        className: P().menuDescription,
                                        children: e3.description
                                      }) : null
                                    ]
                                  }),
                                  (0, a.jsx)(f.A, {
                                    className: P().menuCheck,
                                    size: 16,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  })
                                ]
                              },
                              e3.id
                            )
                          )
                        }),
                        ee2 ? (0, a.jsx)("p", {
                          className: P().menuNote,
                          children: "Simulated voices, no audio plays."
                        }) : null
                      ]
                    })
                  ]
                }),
                (0, a.jsx)(v.m, {
                  content: "Stop reading",
                  children: (0, a.jsx)("button", {
                    type: "button",
                    className: P().iconButton,
                    "aria-label": "Stop reading",
                    onClick: () => eU.close(true),
                    children: (0, a.jsx)(y.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  })
                })
              ]
            })
          ]
        }),
        (0, a.jsx)("span", {
          className: P().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eC
        })
      ]
    });
  }
  var H = r(50680), X = r(55096), J = r.n(X);
  function Q() {
    let [e2, t2] = (0, n.useState)(false), r2 = (0, n.useRef)(false);
    (0, n.useEffect)(() => {
      r2.current = e2;
    }, [e2]);
    let i2 = (0, n.useCallback)((e3) => {
      let a2 = r2.current;
      return a2 && (r2.current = false, t2(false)), S(e3, { fail: a2, delay: 620 });
    }, []);
    return (0, a.jsxs)("div", {
      className: J().demo,
      children: [
        (0, a.jsx)(G, { synthesize: i2, simulated: true }),
        (0, a.jsx)(H.d, {
          className: J().toggle,
          label: "Fail the next speech request",
          checked: e2,
          onCheckedChange: t2
        })
      ]
    });
  }
  let ee = Q;
};

__m(__module,__exports,__require);
}