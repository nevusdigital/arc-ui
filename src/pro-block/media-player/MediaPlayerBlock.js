function(__module,__exports,__require){
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
}