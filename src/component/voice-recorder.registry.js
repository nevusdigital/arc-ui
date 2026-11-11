/* voice-recorder (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(7206, ".root{position:relative;display:flex;min-height:0;flex-direction:column;gap:12px;color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);-webkit-tap-highlight-color:transparent}\n.thread{display:flex;min-height:0;flex:1;flex-direction:column;gap:12px;margin:0;padding:4px 2px;overflow-y:auto;list-style:none;overscroll-behavior:contain;scrollbar-width:none}\n.thread>:first-child{margin-top:auto}\n.message{display:flex;align-items:flex-end;gap:8px}\n.message[data-mine]{justify-content:flex-end}\n.message[data-mine] .messageBody{justify-items:end}\n.message[data-mine] .bubble{background:var(--foreground);color:var(--background)}\n.message[data-mine] .bubblePlay{background:var(--background);color:var(--foreground)}\n.avatar{width:28px;height:28px;flex:none;margin-bottom:20px;border-radius:50%;background:var(--surface-muted);object-fit:cover}\n.messageBody{display:grid;min-width:0;grid-template-columns:minmax(0,1fr);justify-items:start;gap:4px}\n.meta{padding:0 6px;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.bubble{display:flex;max-width:100%;height:44px;box-sizing:border-box;align-items:center;gap:10px;padding:6px 14px 6px 6px;background:var(--surface-muted);color:var(--foreground)}\n.bubblePlay{display:grid;width:32px;height:32px;flex:none;place-items:center;padding:0;border:0;border-radius:50%;background:var(--foreground);color:var(--background);cursor:pointer;transition:scale var(--duration-fast) var(--ease-standard)}\n.bubblePlay:active{scale:.92}\n.bubblePlay,.discard,.reviewPlay,.send,.stop{transition:none}\n.bubbleWave{display:block;height:22px;min-width:0;flex:0 1 auto;overflow:hidden;cursor:pointer;touch-action:pan-y}\n.bubbleWave .barsLayer>span{flex:0 1 3px;min-width:1.5px}\n.barsLayer{display:flex;height:100%;align-items:center;gap:2px}\n.barsLayer[data-played]{position:absolute;inset:0}\n.barsLayer>span{width:3px;flex:none;border-radius:2px;background:color-mix(in oklab,currentColor 28%,transparent)}\n.barsLayer[data-played]>span{background:currentColor}\n.reviewWave .barsLayer{justify-content:space-between}\n.reviewWave .barsLayer>span{width:auto;min-width:1.5px;max-width:3px;flex:1 1 0}\n.bubbleTime{min-width:3.4ch;flex:none;font-size:var(--text-xs);font-variant-numeric:tabular-nums;opacity:.8;text-align:right}\n.bars{position:relative;display:block;height:100%}\n.composer{display:flex;height:48px;box-sizing:content-box;flex:none;align-items:center;gap:8px;padding-top:12px;border-top:1px solid var(--border)}\n.hint{min-width:0;flex:1;overflow:hidden;color:var(--text-muted);font-size:var(--text-sm);text-overflow:ellipsis;white-space:nowrap}\n.mic,.send,.stop{display:grid;width:48px;height:48px;flex:none;place-items:center;padding:0;border:0;border-radius:50%;cursor:pointer}\n.mic{background:var(--foreground);color:var(--background)}\n.send,.stop{background:var(--accent);color:var(--accent-foreground);transition:background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.send:hover,.stop:hover{background:var(--accent-strong)}\n.micIcon{display:grid;place-items:center}\n.discard{display:grid;width:40px;height:40px;flex:none;place-items:center;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.discard:active{background:var(--surface-muted);color:var(--danger)}\n@media (hover:hover) and (pointer:fine){.discard:hover{background:var(--surface-muted);color:var(--danger)}\n.capsule{display:flex;height:48px;min-width:0;flex:1;box-sizing:border-box;overflow:hidden;padding:0 14px 0 8px;background:var(--surface-muted)}\n.capsule[data-phase=recording]{padding-left:16px;background:color-mix(in oklab,var(--accent) 7%,var(--surface-muted))}\n.capsuleRow{display:flex;width:100%;min-width:0;align-items:center;gap:10px}\n.recDot{width:8px;height:8px;flex:none;border-radius:50%;background:var(--danger);animation:rec 1.2s ease-in-out infinite}\n@media (prefers-reduced-motion:reduce){.recDot{animation:none}\n.timer{flex:none;font-size:var(--text-sm);font-variant-numeric:tabular-nums}\n.live{display:block;height:28px;min-width:0;flex:1;color:var(--foreground)}\n.reviewPlay{display:grid;width:32px;height:32px;flex:none;place-items:center;padding:0;border:0;border-radius:50%;background:var(--foreground);color:var(--background);cursor:pointer;transition:scale var(--duration-fast) var(--ease-standard)}\n.reviewPlay:active{scale:.92}\n.reviewWave{height:24px;min-width:0;flex:1;overflow:hidden;cursor:pointer;touch-action:pan-y}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"root":"root","thread":"thread","message":"message","messageBody":"messageBody","bubble":"bubble","bubblePlay":"bubblePlay","avatar":"avatar","meta":"meta","discard":"discard","reviewPlay":"reviewPlay","send":"send","stop":"stop","bubbleWave":"bubbleWave","barsLayer":"barsLayer","reviewWave":"reviewWave","bubbleTime":"bubbleTime","bars":"bars","composer":"composer","hint":"hint","mic":"mic","micIcon":"micIcon","capsule":"capsule","capsuleRow":"capsuleRow","recDot":"recDot","timer":"timer","live":"live","srOnly":"srOnly"});
A.reg(9937, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { x: () => o });
  var n = i(95155), a = i(12115), r = i(30123), l = i(24866), s = i(28819);
  function o({ children: e2, ...t2 }) {
    let i2 = (0, a.useContext)(l.Q);
    (t2 = { ...i2, ...t2 }).transition = (0, r.K)(t2.transition, i2.transition), t2.isStatic = (0, s.M)(() => t2.isStatic);
    let u = (0, a.useMemo)(
      () => t2,
      [
        JSON.stringify(t2.transition),
        t2.transformPagePoint,
        t2.reducedMotion,
        t2.skipAnimations,
        t2.isValidProp
      ]
    );
    return (0, n.jsx)(l.Q.Provider, { value: u, children: e2 });
  }
}

__m(__module,__exports,__require);
});
A.reg(15688, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { A: () => r });
  var a = i(51811);
  let n = {
    name: "mic",
    size: 24,
    node: [
      ["path", { d: "M12 19v3", key: "npa21l" }],
      ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
      [
        "rect",
        { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }
      ]
    ]
  };
  n.node;
  let r = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(42753, function(__module,__exports,__require){
"use strict";
function __m(e, r, t) {
  "use strict";
  t.r(r), t.d(r, { VoiceRecorderDemo: () => Y });
  var a = t(95155), i = t(12115), s = t(92298), o = t(55809), n = t(25354), l = t(28245), c = t(51001), d = t(18310), u = t(9937), h = t(57700), p = t(80642), m = t(79267), v = t(36619), f = t(25879), _ = t(15688), y = t(40852), b = t(38158), g = t(7770), x = t(7206), j = t.n(x);
  let M = (e2, r2, t2) => Math.min(t2, Math.max(r2, e2)), k = (e2) => `${Math.floor(e2 / 60)}:${String(Math.floor(e2 % 60)).padStart(2, "0")}`;
  function N(e2, r2 = 0) {
    let t2, a2 = e2 + 97 * r2, i2 = 0.55 + 0.45 * Math.sin(0.05 * a2 + r2);
    return M(
      (0.22 + 0.78 * Math.abs(Math.sin(0.55 * a2 + 1.7 * Math.sin(0.13 * a2)))) * i2 * (Math.sin(0.085 * a2 + 1.3 * r2) > 0.8 ? 0.14 : 1) * (0.62 + 0.38 * ((t2 = 43758.5453 * Math.sin(127.1 * a2 + 311.7)) - Math.floor(t2))),
      0.07,
      1
    );
  }
  function w(e2, r2, t2 = ((e3) => Math.round(M(14 + 1.3 * e3, 18, 36)))(r2)) {
    let a2 = Math.max(t2, Math.round(1e3 * r2 / 90));
    return Array.from({ length: t2 }, (r3, i2) => {
      let s2 = Math.floor(i2 * a2 / t2), o2 = Math.max(s2 + 1, Math.floor((i2 + 1) * a2 / t2)), n2 = 0;
      for (let r4 = s2; r4 < o2; r4++) n2 = Math.max(n2, N(r4, e2));
      return Math.round(100 * n2) / 100;
    });
  }
  function A({ peaks: e2, progress: r2, className: t2 }) {
    let i2 = (0, o.G)(r2, (e3) => `inset(0 ${(1 - M(e3, 0, 1)) * 100}% 0 0)`), s2 = e2.map(
      (e3, r3) => (0, a.jsx)(
        "span",
        { style: { height: `${Math.max(12, 100 * e3)}%` } },
        r3
      )
    );
    return (0, a.jsxs)("span", {
      className: [j().bars, t2].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: [
        (0, a.jsx)("span", { className: j().barsLayer, children: s2 }),
        (0, a.jsx)(n.PY1.span, {
          className: j().barsLayer,
          "data-played": true,
          style: { clipPath: i2 },
          children: s2
        })
      ]
    });
  }
  function P(e2) {
    let r2 = (0, l.d)(0), [t2, a2] = (0, i.useState)(false), s2 = (0, i.useRef)({ playing: t2, duration: e2 });
    return (0, i.useEffect)(() => {
      s2.current = { playing: t2, duration: e2 };
    }), (0, c.N)((e3, t3) => {
      if (!s2.current.playing) return;
      let i2 = r2.get() + t3 / 1e3 / s2.current.duration;
      if (i2 >= 1) {
        r2.set(1), a2(false);
        return;
      }
      r2.set(i2);
    }), {
      progress: r2,
      playing: t2,
      toggle: function() {
        !t2 && r2.get() >= 1 && r2.set(0), a2(!t2);
      },
      setPlaying: a2
    };
  }
  function R({ message: e2, layoutId: r2 }) {
    let { progress: t2, playing: s2, toggle: o2 } = P(e2.duration), [l2, c2] = (0, i.useState)(0);
    (0, i.useEffect)(
      () => t2.on("change", (r3) => c2(Math.floor(r3 * e2.duration))),
      [t2, e2.duration]
    );
    let d2 = !e2.from, u2 = `${s2 ? "Pause" : "Play"} voice message${e2.from ? ` from ${e2.from}` : ""}, ${k(e2.duration)}`;
    return (0, a.jsxs)("li", {
      className: j().message,
      "data-mine": d2 || void 0,
      children: [
        !d2 && (e2.avatar ? (0, a.jsx)("img", {
          className: j().avatar,
          src: e2.avatar,
          alt: "",
          width: 28,
          height: 28,
          draggable: false
        }) : (0, a.jsx)("span", {
          className: j().avatar,
          "aria-hidden": "true"
        })),
        (0, a.jsxs)("div", {
          className: j().messageBody,
          children: [
            (0, a.jsxs)(n.PY1.div, {
              layoutId: r2,
              className: j().bubble,
              style: { borderRadius: 22 },
              transition: g.T.spring.morph,
              children: [
                (0, a.jsx)(n.PY1.button, {
                  layout: "position",
                  type: "button",
                  className: j().bubblePlay,
                  "aria-label": u2,
                  onClick: o2,
                  transition: g.T.spring.morph,
                  children: s2 ? (0, a.jsx)(m.A, {
                    size: 14,
                    strokeWidth: 2,
                    fill: "currentColor",
                    "aria-hidden": "true"
                  }) : (0, a.jsx)(v.A, {
                    size: 14,
                    strokeWidth: 2,
                    fill: "currentColor",
                    "aria-hidden": "true"
                  })
                }),
                (0, a.jsx)(n.PY1.span, {
                  layout: "position",
                  className: j().bubbleWave,
                  onPointerDown: function(e3) {
                    let r3 = e3.currentTarget.getBoundingClientRect();
                    t2.set(M((e3.clientX - r3.left) / r3.width, 0, 1));
                  },
                  transition: g.T.spring.morph,
                  children: (0, a.jsx)(A, { peaks: e2.peaks, progress: t2 })
                }),
                (0, a.jsx)(n.PY1.span, {
                  layout: "position",
                  className: j().bubbleTime,
                  transition: g.T.spring.morph,
                  children: k(s2 || l2 > 0 ? l2 : e2.duration)
                })
              ]
            }),
            e2.meta && (0, a.jsx)("span", { className: j().meta, children: e2.meta })
          ]
        })
      ]
    });
  }
  function C({
    defaultMessages: e2 = [],
    onSend: r2,
    onCancel: t2,
    maxDuration: s2 = 60,
    sentMeta: x2 = "Just now",
    label: T2 = "Voice messages",
    className: S2
  }) {
    let W2 = (0, d.I)() ?? false, $2 = (0, i.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), Y2 = `${$2}-status`, [z, E] = (0, i.useState)(e2), [G, L] = (0, i.useState)("idle"), [D, V] = (0, i.useState)(0), [B, I] = (0, i.useState)({ seed: 1, duration: 0 }), K = (e3) => `${$2}-take-${e3}`, [O, q] = (0, i.useState)(""), [H, Q] = (0, i.useState)("fold"), [U, X] = (0, i.useState)(0), J = (0, l.d)(0), Z = (0, i.useRef)(null), F = (0, i.useRef)(null), ee = (0, i.useRef)(null), er = (0, i.useRef)(G), et = (0, i.useRef)(false), ea = P(Math.max(1, B.duration)), ei = (0, o.G)(J, (e3) => `${k(e3 / 1e3)}.${Math.floor(e3 % 1e3 / 100)}`), es = (0, o.G)(ea.progress, (e3) => k(e3 * B.duration));
    function eo() {
      let e3 = Math.max(1, Math.round(J.get() / 100) / 10);
      er.current = "review", I((r3) => ({ ...r3, duration: e3 })), ea.progress.set(0), ea.setPlaying(false), q(`Recorded ${k(e3)}. Play it back or send it.`), L("review");
    }
    function en() {
      er.current = "idle", ea.setPlaying(false), V((e3) => e3 - 1), Q("fold"), q("Voice note discarded"), L("idle"), t2?.();
    }
    (0, i.useEffect)(() => {
      er.current = G;
    }), (0, c.N)((e3, r3) => {
      if ("recording" !== er.current) return;
      let t3 = Math.min(J.get() + r3, 1e3 * s2);
      J.set(t3), (function(e4, r4, t4, a3) {
        if (!e4) return;
        let i2 = e4.clientWidth, s3 = e4.clientHeight;
        if (!i2 || !s3) return;
        let o2 = window.devicePixelRatio || 1;
        e4.width !== Math.round(i2 * o2) && (e4.width = Math.round(i2 * o2), e4.height = Math.round(s3 * o2));
        let n2 = e4.getContext("2d");
        if (!n2) return;
        n2.setTransform(o2, 0, 0, o2, 0, 0), n2.clearRect(0, 0, i2, s3), n2.fillStyle = getComputedStyle(e4).color;
        let l2 = a3 ? 90 * Math.floor(r4 / 90) : r4, c2 = Math.floor(l2 / 90), d2 = Math.ceil(i2 / 5) + 2;
        for (let e5 = c2; e5 > c2 - d2 && e5 >= 0; e5--) {
          let r5 = l2 - 90 * e5, o3 = i2 - 2 - r5 / 90 * 5;
          if (o3 < -3) break;
          let c3 = a3 ? 1 : M(r5 / 140, 0, 1), d3 = Math.max(3, N(e5, t4) * (s3 - 4) * c3);
          n2.globalAlpha = M(o3 / (0.25 * i2), 0.25, 1), n2.beginPath(), n2.roundRect(o3, (s3 - d3) / 2, 3, d3, 1.5), n2.fill();
        }
        n2.globalAlpha = 1;
      })(Z.current, t3, B.seed, W2);
      let a2 = Math.floor(t3 / 1e3);
      a2 !== U && X(a2), t3 >= 1e3 * s2 && eo();
    }), (0, i.useEffect)(() => {
      if (!et.current) {
        et.current = true;
        return;
      }
      ee.current?.focus({ preventScroll: true });
    }, [G]), (0, i.useEffect)(() => {
      let e3 = F.current;
      e3 && e3.scrollTo({ top: e3.scrollHeight, behavior: W2 ? "auto" : "smooth" });
    }, [z.length, W2]);
    let el = {
      initial: { opacity: 0, filter: `blur(${g.T.blur.subtle}px)` },
      animate: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: g.T.duration.standard,
          ease: g.T.ease.standard,
          delay: 0.05 * !W2
        }
      },
      exit: {
        opacity: 0,
        filter: `blur(${g.T.blur.subtle}px)`,
        transition: { duration: g.T.duration.instant, ease: g.T.ease.exit }
      }
    }, ec = {
      initial: { opacity: 0, scale: 0.7 },
      animate: { opacity: 1, scale: 1 },
      exit: {
        opacity: 0,
        scale: 0.7,
        transition: { duration: g.T.duration.instant }
      },
      transition: g.T.spring.snappy
    };
    return (0, a.jsx)(u.x, {
      reducedMotion: "user",
      children: (0, a.jsxs)("section", {
        className: [j().root, S2].filter(Boolean).join(" "),
        "aria-label": T2,
        children: [
          (0, a.jsxs)(h.o, {
            children: [
              (0, a.jsx)("ol", {
                ref: F,
                className: j().thread,
                "aria-label": "Messages",
                children: z.map(
                  (e3) => (0, a.jsx)(R, { message: e3, layoutId: `vr-${e3.id}` }, e3.id)
                )
              }),
              (0, a.jsxs)("div", {
                className: j().composer,
                "data-phase": G,
                onKeyDown: function(e3) {
                  "Escape" === e3.key && "idle" !== G && (e3.preventDefault(), en());
                },
                children: [
                  (0, a.jsx)(p.N, {
                    initial: false,
                    mode: "popLayout",
                    children: "idle" === G && (0, a.jsx)(
                      n.PY1.span,
                      {
                        className: j().hint,
                        ...el,
                        children: "Tap the mic to record a voice note"
                      },
                      "hint"
                    )
                  }),
                  (0, a.jsx)(p.N, {
                    initial: false,
                    mode: "popLayout",
                    children: "idle" !== G && (0, a.jsx)(
                      n.PY1.button,
                      {
                        type: "button",
                        className: j().discard,
                        "aria-label": "Discard voice note",
                        onClick: en,
                        ...ec,
                        children: (0, a.jsx)(f.A, {
                          size: 18,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      },
                      "discard"
                    )
                  }),
                  "idle" === G ? (0, a.jsx)(
                    n.PY1.button,
                    {
                      ref: ee,
                      layoutId: `vr-${K(D + 1)}`,
                      type: "button",
                      className: j().mic,
                      "aria-label": "Record voice note",
                      "aria-describedby": Y2,
                      onClick: function() {
                        let e3 = D + 1;
                        J.set(0), X(0), V(e3), I({ seed: 7 * e3 + 3, duration: 0 }), q("Recording"), L("recording");
                      },
                      initial: "pop" === H && { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1 },
                      style: { borderRadius: 999 },
                      transition: g.T.spring.morph,
                      children: (0, a.jsx)(n.PY1.span, {
                        layout: "position",
                        className: j().micIcon,
                        transition: g.T.spring.morph,
                        children: (0, a.jsx)(_.A, {
                          size: 20,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      })
                    },
                    "mic"
                  ) : (0, a.jsx)(n.PY1.div, {
                    layoutId: `vr-${K(D)}`,
                    className: j().capsule,
                    "data-phase": G,
                    style: { borderRadius: 999 },
                    transition: g.T.spring.morph,
                    children: (0, a.jsx)(p.N, {
                      initial: false,
                      mode: "popLayout",
                      children: "recording" === G ? (0, a.jsxs)(
                        n.PY1.div,
                        {
                          layout: "position",
                          className: j().capsuleRow,
                          ...el,
                          children: [
                            (0, a.jsx)("span", {
                              className: j().recDot,
                              "aria-hidden": "true"
                            }),
                            (0, a.jsx)(n.PY1.span, {
                              className: j().timer,
                              "aria-hidden": "true",
                              children: ei
                            }),
                            (0, a.jsx)("canvas", {
                              ref: Z,
                              className: j().live,
                              "aria-hidden": "true"
                            })
                          ]
                        },
                        "recording"
                      ) : (0, a.jsxs)(
                        n.PY1.div,
                        {
                          layout: "position",
                          className: j().capsuleRow,
                          ...el,
                          children: [
                            (0, a.jsx)("button", {
                              type: "button",
                              className: j().reviewPlay,
                              "aria-label": ea.playing ? "Pause preview" : "Play preview",
                              onClick: ea.toggle,
                              children: ea.playing ? (0, a.jsx)(m.A, {
                                size: 14,
                                strokeWidth: 2,
                                fill: "currentColor",
                                "aria-hidden": "true"
                              }) : (0, a.jsx)(v.A, {
                                size: 14,
                                strokeWidth: 2,
                                fill: "currentColor",
                                "aria-hidden": "true"
                              })
                            }),
                            (0, a.jsx)("span", {
                              className: j().reviewWave,
                              onPointerDown: (e3) => {
                                let r3 = e3.currentTarget.getBoundingClientRect();
                                ea.progress.set(
                                  M(
                                    (e3.clientX - r3.left) / r3.width,
                                    0,
                                    1
                                  )
                                );
                              },
                              children: (0, a.jsx)(A, {
                                peaks: w(B.seed, B.duration, 40),
                                progress: ea.progress
                              })
                            }),
                            (0, a.jsx)(n.PY1.span, {
                              className: j().timer,
                              "aria-hidden": "true",
                              children: ea.playing ? es : k(B.duration)
                            })
                          ]
                        },
                        "review"
                      )
                    })
                  }),
                  (0, a.jsxs)(p.N, {
                    initial: false,
                    mode: "popLayout",
                    children: [
                      "recording" === G && (0, a.jsx)(
                        n.PY1.button,
                        {
                          ref: ee,
                          type: "button",
                          className: j().stop,
                          "aria-label": `Stop recording at ${k(U)}`,
                          onClick: eo,
                          ...ec,
                          children: (0, a.jsx)(y.A, {
                            size: 14,
                            strokeWidth: 2,
                            fill: "currentColor",
                            "aria-hidden": "true"
                          })
                        },
                        "stop"
                      ),
                      "review" === G && (0, a.jsx)(
                        n.PY1.button,
                        {
                          ref: ee,
                          type: "button",
                          className: j().send,
                          "aria-label": "Send voice note",
                          onClick: function() {
                            let e3 = {
                              id: K(D),
                              duration: B.duration,
                              peaks: w(B.seed, B.duration),
                              meta: x2
                            };
                            ea.setPlaying(false), E((r3) => [...r3, e3]), Q("pop"), q("Voice note sent"), L("idle"), r2?.(e3);
                          },
                          ...ec,
                          children: (0, a.jsx)(b.A, {
                            size: 18,
                            strokeWidth: 2,
                            "aria-hidden": "true"
                          })
                        },
                        "send"
                      )
                    ]
                  })
                ]
              })
            ]
          }),
          (0, a.jsx)("p", {
            id: Y2,
            className: j().srOnly,
            "aria-live": "polite",
            children: O
          })
        ]
      })
    });
  }
  var T = t(93543), S = t.n(T);
  let W = "media/specials/voice-recorder-megan.svg", $ = [
    {
      id: "megan-cedar",
      from: "Megan Brooks",
      avatar: W,
      duration: 14,
      peaks: w(3, 14),
      meta: "9:38 AM"
    },
    { id: "me-stain", duration: 6, peaks: w(8, 6), meta: "9:40 AM" },
    {
      id: "megan-crew",
      from: "Megan Brooks",
      avatar: W,
      duration: 9,
      peaks: w(12, 9),
      meta: "9:41 AM"
    }
  ];
  function Y() {
    let [e2, r2] = (0, i.useState)(0);
    return (0, a.jsxs)("div", {
      className: S().frame,
      children: [
        (0, a.jsxs)("header", {
          className: S().header,
          children: [
            (0, a.jsx)("img", {
              className: S().avatar,
              src: W,
              alt: "",
              width: 36,
              height: 36
            }),
            (0, a.jsxs)("div", {
              className: S().names,
              children: [
                (0, a.jsx)("p", {
                  className: S().name,
                  children: "Megan Brooks"
                }),
                (0, a.jsx)("p", {
                  className: S().topic,
                  children: "Porch renovation"
                })
              ]
            }),
            (0, a.jsx)("button", {
              type: "button",
              className: S().reset,
              "aria-label": "Reset thread",
              onClick: () => r2((e3) => e3 + 1),
              children: (0, a.jsx)(s.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            })
          ]
        }),
        (0, a.jsx)(
          C,
          {
            className: S().recorder,
            defaultMessages: $,
            label: "Voice messages with Megan Brooks"
          },
          e2
        )
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(51001, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { N: () => l });
  var n = i(27933), a = i(12115), r = i(24866);
  function l(e2) {
    let t2 = (0, a.useRef)(0), { isStatic: i2 } = (0, a.useContext)(r.Q);
    (0, a.useEffect)(() => {
      if (i2) return;
      let a2 = ({ timestamp: i3, delta: n2 }) => {
        t2.current || (t2.current = i3), e2(i3 - t2.current, n2);
      };
      return n.Gt.update(a2, true), () => (0, n.WG)(a2);
    }, [e2]);
  }
}

__m(__module,__exports,__require);
});
A.regCss(93543, ".frame{display:flex;width:min(100%,26rem);height:25.5rem;box-sizing:border-box;flex-direction:column;gap:12px;margin-inline:auto;padding:14px 14px 12px;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface)}\n.header{display:flex;align-items:center;gap:10px;padding-bottom:12px;border-bottom:1px solid var(--border)}\n.avatar{width:36px;height:36px;flex:none;border-radius:50%;object-fit:cover}\n.names{min-width:0;flex:1}\n.name,.topic{margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.name{font-size:var(--text-sm);font-weight:500}\n.topic{color:var(--text-muted);font-size:var(--text-xs)}\n.reset{display:grid;width:36px;height:36px;flex:none;place-items:center;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard)}\n.reset:active{background:var(--surface-muted)}\n@media (hover:hover) and (pointer:fine){.reset:hover{background:var(--surface-muted);color:var(--foreground)}\n.recorder{min-height:0;flex:1}", {"frame":"frame","header":"header","avatar":"avatar","names":"names","name":"name","topic":"topic","reset":"reset","recorder":"recorder"});
A.cssFor("voice-recorder", [7206,93543]);
A.item("voice-recorder", {entry:42753, export:"VoiceRecorderDemo", kind:"component", tier:"pro", unresolved:[]});
})();