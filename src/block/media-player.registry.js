/* media-player (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(16642, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { A: () => r });
  var n = i(51811);
  let a = {
    name: "skip-back",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
          key: "15892j"
        }
      ],
      ["path", { d: "M3 20V4", key: "1ptbpl" }]
    ]
  };
  a.node;
  let r = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.regCss(18678, ".player{box-sizing:border-box;width:min(520px,100%);padding:20px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-surface);color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n@media(max-width:420px){.player{padding:14px}\n@media(prefers-reduced-motion:reduce){.player *{transition-duration:0s!important}\n.cover{position:relative;aspect-ratio:2.2;overflow:hidden;border-radius:var(--radius-control);background:var(--surface-muted)}\n.cover{aspect-ratio:1.7;border-radius:14px}\n.coverImage{position:absolute;inset:0}\n.coverImage img{object-fit:cover;object-position:center 57%}\n.nowPlaying{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 4px 12px}\n.nowPlaying h2{margin:0 0 4px;overflow:hidden;font:400 var(--text-2xl)/var(--leading-display) var(--font-display);letter-spacing:var(--tracking-display);text-overflow:ellipsis;white-space:nowrap}\n.nowPlaying p{margin:0;overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}\n.nowPlaying{gap:10px}\n.nowPlaying h2{font-size:var(--text-xl)}\n.titleClip{position:relative;flex:1;min-width:0;overflow:hidden}\n.transport{display:flex;align-items:center;gap:8px;flex-shrink:0}\n.transport button,.volume button{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--foreground);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform var(--duration-instant) var(--ease-standard),color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.transport button:active,.volume button:active{transform:scale(.94)}\n.transport .playButton{width:44px;height:44px;background:var(--foreground);color:var(--background)}\n.transport .playButton:disabled{opacity:.4;cursor:wait}\n@media (hover:hover) and (pointer:fine){.track:hover,.transport button:not(.playButton):hover,.volume button:hover{background:var(--surface-muted)}\n.transport{gap:2px}\n.transport button{width:32px;height:32px}\n.transport .playButton{width:42px;height:42px}\n.volume{display:flex;align-items:center;gap:4px}\n.volume .range{flex:none;width:88px}\n.volume button{color:var(--text-secondary)}\n.volume .range{width:64px}\n.playIcon{display:grid;place-items:center}\n.timeline{display:flex;align-items:center;gap:12px;padding:0 4px 18px}\n.timeline span{min-width:30px;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.timeline span:last-child{text-align:right}\n.range{--fill:0%;flex:1;min-width:0;height:18px;margin:0;padding:0;appearance:none;-webkit-appearance:none;background:transparent;cursor:pointer}\n.range::-webkit-slider-runnable-track{height:4px;border-radius:99px;background:linear-gradient(to right,var(--control-fill) var(--fill),var(--border) var(--fill))}\n.range::-moz-range-track{height:4px;border-radius:99px;background:linear-gradient(to right,var(--control-fill) var(--fill),var(--border) var(--fill))}\n.range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:12px;height:12px;margin-top:-4px;border:0;border-radius:50%;background:var(--foreground);box-shadow:0 0 0 3px var(--surface);transition:transform var(--duration-instant) var(--ease-standard)}\n.range::-moz-range-thumb{width:12px;height:12px;border:0;border-radius:50%;background:var(--foreground);box-shadow:0 0 0 3px var(--surface)}\n.range:active::-webkit-slider-thumb{transform:scale(1.2)}\n.queueHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 4px 6px;border-top:1px solid var(--border-subtle)}\n.queueHead h3{margin:0;font:500 var(--text-sm)/var(--leading-body) var(--font-body)}\n.queue{display:grid;margin:0;padding:0;list-style:none}\n.queue li+li{border-top:1px solid var(--border-subtle)}\n.track{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;min-height:44px;gap:12px;padding:0 10px 0 14px;border:0;border-radius:12px;background:transparent;color:var(--text-secondary);font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.track[data-current=true]{color:var(--foreground)}\n.trackTitle{min-width:0;overflow:hidden;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);text-overflow:ellipsis;white-space:nowrap}\n.trackStatus{display:inline-flex;align-items:center;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap}\n.selectionRail{position:absolute;top:12px;bottom:12px;left:2px;width:2px;background:var(--accent);border-radius:2px;pointer-events:none}\n.bars{display:inline-flex;align-items:flex-end;gap:2px;height:12px}\n.bars i{display:block;width:2px;height:100%;border-radius:1px;background:var(--accent);transform-origin:bottom;animation:bar .9s var(--ease-in-out) infinite alternate}\n.bars i:nth-child(2){animation-delay:-.3s}\n.bars i:nth-child(3){animation-delay:-.6s}\n.bars[data-reduce] i{animation:none;transform:scaleY(.6)}\n.bars i{animation:none;transform:scaleY(.6)}\n.sourceNote{margin:10px 4px 0;color:var(--text-muted);font-size:var(--text-xs)}", {"player":"player","cover":"cover","coverImage":"coverImage","nowPlaying":"nowPlaying","titleClip":"titleClip","transport":"transport","volume":"volume","playButton":"playButton","track":"track","range":"range","playIcon":"playIcon","timeline":"timeline","queueHead":"queueHead","queue":"queue","trackTitle":"trackTitle","trackStatus":"trackStatus","selectionRail":"selectionRail","bars":"bars","sourceNote":"sourceNote"});
A.reg(24860, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { A: () => r });
  var n = i(51811);
  let a = {
    name: "skip-forward",
    size: 24,
    node: [
      ["path", { d: "M21 4v16", key: "7j8fe9" }],
      [
        "path",
        {
          d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
          key: "zs4d6"
        }
      ]
    ]
  };
  a.node;
  let r = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(28980, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var i = a(51811);
  let s = {
    name: "volume-x",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",
          key: "1p7khw"
        }
      ],
      ["path", { d: "m16.5 14.5 5-5", key: "cul3yw" }],
      ["path", { d: "m16.5 9.5 5 5", key: "1akey5" }]
    ]
  };
  s.node;
  let n = (0, i.A)(s);
}

__m(__module,__exports,__require);
});
A.reg(76258, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { MediaPlayerBlock: () => k, default: () => x });
  var i = t(95155), r = t(12115), l = t(5772), n = t(18310), s = t(80642), o = t(25354), d = t(16642), c = t(79267), h = t(36619), p = t(24860), m = t(84614), u = t(28980), g = t(7770), y = t(67752), w = t(18678), f = t.n(w);
  let v = [
    {
      title: "Morning tide",
      artist: "Arc Sessions",
      length: 24,
      bpm: 84,
      notes: [220, 261.63, 329.63, 293.66, 246.94, 196, 246.94, 293.66],
      cover: "sea-at-dusk"
    },
    {
      title: "Glass garden",
      artist: "Arc Sessions",
      length: 24,
      bpm: 96,
      notes: [261.63, 329.63, 392, 440, 392, 329.63, 293.66, 329.63],
      cover: "sunroom"
    },
    {
      title: "After the rain",
      artist: "Arc Sessions",
      length: 24,
      bpm: 72,
      notes: [196, 246.94, 293.66, 261.63, 220, 261.63, 329.63, 246.94],
      cover: "alpine-lake"
    }
  ], b = [...g.T.ease.standard];
  function j(e2) {
    let a2 = Number.isFinite(e2) ? Math.floor(e2) : 0;
    return `${Math.floor(a2 / 60)}:${String(a2 % 60).padStart(2, "0")}`;
  }
  function k() {
    var e2;
    let a2 = (0, n.I)(), t2 = (0, r.useRef)(null), w2 = (0, r.useRef)(false), [k2, x2] = (0, r.useState)(0), [_, A] = (0, r.useState)(false), [M, N] = (0, r.useState)(0), [z, P] = (0, r.useState)(0.7), [C, S] = (0, r.useState)(0.7), [T, I] = (0, r.useState)(false), U = v[k2], L = (e2 = U.cover, y.KQ.find((a3) => a3.id === e2) ?? y.KQ[0]);
    async function R() {
      let e3 = t2.current;
      if (e3 && T)
        if (e3.paused)
          try {
            await e3.play(), A(true);
          } catch {
            A(false);
          }
        else e3.pause(), A(false);
    }
    function q(e3) {
      e3 === k2 ? R() : (w2.current = _, A(false), N(0), x2(e3));
    }
    function O(e3) {
      q((k2 + e3 + v.length) % v.length);
    }
    (0, r.useEffect)(() => {
      let e3 = t2.current;
      if (!e3) return;
      let a3 = URL.createObjectURL(
        (function(e4) {
          let a4 = 22050 * e4.length, t3 = new ArrayBuffer(44 + 2 * a4), i2 = new DataView(t3), r2 = (e5, a5) => {
            for (let t4 = 0; t4 < a5.length; t4++)
              i2.setUint8(e5 + t4, a5.charCodeAt(t4));
          };
          r2(0, "RIFF"), i2.setUint32(4, 36 + 2 * a4, true), r2(8, "WAVE"), r2(12, "fmt "), i2.setUint32(16, 16, true), i2.setUint16(20, 1, true), i2.setUint16(22, 1, true), i2.setUint32(24, 22050, true), i2.setUint32(28, 44100, true), i2.setUint16(32, 2, true), i2.setUint16(34, 16, true), r2(36, "data"), i2.setUint32(40, 2 * a4, true);
          let l2 = 60 / e4.bpm;
          for (let t4 = 0; t4 < a4; t4++) {
            let a5 = t4 / 22050, r3 = Math.floor(a5 / l2) % e4.notes.length, n2 = a5 % l2 / l2, s2 = e4.notes[r3], o2 = Math.max(
              -1,
              Math.min(
                1,
                (Math.sin(2 * Math.PI * s2 * a5) * Math.exp(-(5.2 * n2)) * 0.43 + Math.sin(2 * Math.PI * s2 * 2 * a5) * Math.exp(-(8 * n2)) * 0.16 + 0.18 * Math.sin(
                  2 * Math.PI * e4.notes[2 * Math.floor(r3 / 2)] * 0.5 * a5
                ) + Math.sin(2 * Math.PI * 82 * a5) * Math.exp(-(a5 % (2 * l2) / l2 * 18)) * 0.08) * Math.min(1, a5 / 0.18, (e4.length - a5) / 0.5)
              )
            );
            i2.setInt16(44 + 2 * t4, 32767 * o2, true);
          }
          return new Blob([t3], { type: "audio/wav" });
        })(v[k2])
      );
      return e3.src = a3, e3.load(), e3.currentTime = 0, w2.current && e3.play().then(() => A(true)).catch(() => A(false)), I(true), () => {
        e3.pause(), URL.revokeObjectURL(a3);
      };
    }, [k2]), (0, r.useEffect)(() => {
      t2.current && (t2.current.volume = z);
    }, [z]);
    let B = !a2, $ = B ? g.T.spring.gentle : { duration: 0 }, E = 100 * Math.min(1, M / U.length);
    return (0, i.jsxs)("section", {
      className: f().player,
      "aria-label": "Audio player",
      children: [
        (0, i.jsx)("audio", {
          ref: t2,
          preload: "auto",
          onTimeUpdate: (e3) => N(e3.currentTarget.currentTime),
          onEnded: (e3) => {
            e3.currentTarget.currentTime = 0, A(false), w2.current = false, N(0);
          }
        }),
        (0, i.jsx)("div", {
          className: f().cover,
          children: (0, i.jsx)(s.N, {
            initial: false,
            children: (0, i.jsx)(
              o.PY1.div,
              {
                className: f().coverImage,
                initial: !!B && { opacity: 0 },
                animate: { opacity: 1 },
                exit: B ? { opacity: 0 } : void 0,
                transition: {
                  duration: B ? g.T.duration.standard : 0,
                  ease: b
                },
                children: (0, i.jsx)(l.default, {
                  src: L.src,
                  alt: L.alt,
                  fill: true,
                  sizes: "(max-width: 560px) 100vw, 520px"
                })
              },
              L.id
            )
          })
        }),
        (0, i.jsxs)("div", {
          className: f().nowPlaying,
          children: [
            (0, i.jsx)("div", {
              className: f().titleClip,
              children: (0, i.jsx)(s.N, {
                mode: "popLayout",
                initial: false,
                children: (0, i.jsxs)(
                  o.PY1.div,
                  {
                    initial: !!B && { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    exit: B ? { opacity: 0, y: -10 } : { opacity: 0 },
                    transition: B ? g.T.spring.gentle : { duration: 0 },
                    children: [
                      (0, i.jsx)("h2", { children: U.title }),
                      (0, i.jsxs)("p", {
                        children: [U.artist, " \xB7 Original loop"]
                      })
                    ]
                  },
                  U.title
                )
              })
            }),
            (0, i.jsxs)("div", {
              className: f().transport,
              children: [
                (0, i.jsx)("button", {
                  type: "button",
                  onClick: () => O(-1),
                  "aria-label": "Previous track",
                  children: (0, i.jsx)(d.A, { size: 18, fill: "currentColor" })
                }),
                (0, i.jsx)("button", {
                  className: f().playButton,
                  type: "button",
                  onClick: () => void R(),
                  disabled: !T,
                  "aria-label": _ ? "Pause" : "Play",
                  children: B ? (0, i.jsx)(s.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, i.jsx)(
                      o.PY1.span,
                      {
                        className: f().playIcon,
                        initial: {
                          opacity: 0,
                          scale: 0.6,
                          filter: "blur(2px)"
                        },
                        animate: {
                          opacity: 1,
                          scale: 1,
                          filter: "blur(0px)"
                        },
                        exit: {
                          opacity: 0,
                          scale: 0.6,
                          filter: "blur(2px)"
                        },
                        transition: {
                          duration: g.T.duration.fast,
                          ease: b
                        },
                        children: _ ? (0, i.jsx)(c.A, {
                          size: 20,
                          fill: "currentColor"
                        }) : (0, i.jsx)(h.A, {
                          size: 20,
                          fill: "currentColor"
                        })
                      },
                      _ ? "pause" : "play"
                    )
                  }) : _ ? (0, i.jsx)(c.A, { size: 20, fill: "currentColor" }) : (0, i.jsx)(h.A, { size: 20, fill: "currentColor" })
                }),
                (0, i.jsx)("button", {
                  type: "button",
                  onClick: () => O(1),
                  "aria-label": "Next track",
                  children: (0, i.jsx)(p.A, { size: 18, fill: "currentColor" })
                })
              ]
            })
          ]
        }),
        (0, i.jsxs)("div", {
          className: f().timeline,
          children: [
            (0, i.jsx)("span", { children: j(M) }),
            (0, i.jsx)("input", {
              className: f().range,
              style: { "--fill": `${E}%` },
              type: "range",
              min: 0,
              max: U.length,
              step: 0.1,
              value: Math.min(M, U.length),
              onChange: (e3) => {
                var a3;
                let i2;
                return a3 = Number(e3.target.value), void ((i2 = t2.current) && (i2.currentTime = a3), N(a3));
              },
              "aria-label": `Seek ${U.title}`,
              "aria-valuetext": `${j(M)} of ${j(U.length)}`
            }),
            (0, i.jsx)("span", { children: j(U.length) })
          ]
        }),
        (0, i.jsxs)("div", {
          className: f().queueHead,
          children: [
            (0, i.jsx)("h3", { children: "Playlist" }),
            (0, i.jsxs)("div", {
              className: f().volume,
              children: [
                (0, i.jsx)("button", {
                  type: "button",
                  onClick: function() {
                    z > 0 ? (S(z), P(0)) : P(C || 0.7);
                  },
                  "aria-label": z ? "Mute audio" : "Unmute audio",
                  children: z ? (0, i.jsx)(m.A, { size: 16 }) : (0, i.jsx)(u.A, { size: 16 })
                }),
                (0, i.jsx)("input", {
                  className: f().range,
                  style: { "--fill": `${100 * z}%` },
                  type: "range",
                  min: 0,
                  max: 1,
                  step: 0.01,
                  value: z,
                  onChange: (e3) => P(Number(e3.target.value)),
                  "aria-label": "Volume",
                  "aria-valuetext": `${Math.round(100 * z)}%`
                })
              ]
            })
          ]
        }),
        (0, i.jsx)("ul", {
          className: f().queue,
          children: v.map((e3, t3) => {
            let r2 = t3 === k2;
            return (0, i.jsx)(
              "li",
              {
                children: (0, i.jsxs)("button", {
                  type: "button",
                  className: f().track,
                  "data-current": r2,
                  onClick: () => q(t3),
                  "aria-label": `${r2 && _ ? "Pause" : "Play"} ${e3.title}`,
                  "aria-current": r2 ? "true" : void 0,
                  children: [
                    r2 && (0, i.jsx)(o.PY1.span, {
                      className: f().selectionRail,
                      layoutId: "media-player-selection",
                      transition: $,
                      "aria-hidden": "true"
                    }),
                    (0, i.jsx)("span", {
                      className: f().trackTitle,
                      children: e3.title
                    }),
                    (0, i.jsx)("span", {
                      className: f().trackStatus,
                      children: r2 && _ ? (0, i.jsxs)("span", {
                        className: f().bars,
                        "data-reduce": a2 ? "true" : void 0,
                        "aria-label": "Playing",
                        children: [
                          (0, i.jsx)("i", {}),
                          (0, i.jsx)("i", {}),
                          (0, i.jsx)("i", {})
                        ]
                      }) : j(e3.length)
                    })
                  ]
                })
              },
              e3.title
            );
          })
        })
      ]
    });
  }
  let x = k;
}

__m(__module,__exports,__require);
});
A.reg(84614, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var i = a(51811);
  let s = {
    name: "volume-2",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
          key: "uqj9uw"
        }
      ],
      ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
      ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
    ]
  };
  s.node;
  let n = (0, i.A)(s);
}

__m(__module,__exports,__require);
});
A.cssFor("media-player", [18678]);
A.item("media-player", {entry:76258, export:"MediaPlayerBlock", kind:"block", tier:"pro", unresolved:[]});
})();