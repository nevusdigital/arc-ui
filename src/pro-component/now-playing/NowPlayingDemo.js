function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { NowPlayingDemo: () => R });
  var n = i(95155), a = i(12115), r = i(55809), l = i(28245), s = i(7890), o = i(92171), u = i(25354), d = i(18310), c = i(51001), p = i(9937), y = i(80642), h = i(79267), f = i(36619), g = i(12363), x = i(16642), _ = i(24860), m = i(7770), w = i(47874), b = i.n(w);
  let v = (e2, t2, i2) => Math.min(i2, Math.max(t2, e2)), j = (e2) => `${Math.floor(e2 / 60)}:${String(Math.floor(e2 % 60)).padStart(2, "0")}`;
  function P(e2, t2, i2 = 0.55) {
    let n2 = Math.abs(e2);
    return n2 * t2 * i2 * Math.sign(e2) / (t2 + i2 * n2);
  }
  function k({ playing: e2, className: t2 }) {
    return (0, n.jsxs)("span", {
      className: [b().levels, t2].filter(Boolean).join(" "),
      "data-playing": e2 || void 0,
      "aria-hidden": "true",
      children: [
        (0, n.jsx)("span", {}),
        (0, n.jsx)("span", {}),
        (0, n.jsx)("span", {})
      ]
    });
  }
  function N({ track: e2, progress: t2, onScrub: i2, onSeek: d2 }) {
    let c2 = (function(e3) {
      let t3 = 0;
      for (let i3 of e3) t3 = 31 * t3 + i3.charCodeAt(0) >>> 0;
      return Array.from({ length: 54 }, (e4, i3) => {
        let n2 = 0.35 + 0.65 * Math.sin(Math.PI * v(i3 / 53 * 1.1, 0, 1)) ** 0.7;
        return v(
          n2 * (0.45 + 0.55 * ((t3 = 1664525 * t3 + 1013904223 >>> 0) / 4294967296)),
          0.12,
          1
        );
      });
    })(e2.id), p2 = (0, r.G)(t2, (e3) => `inset(0 ${(1 - e3) * 100}% 0 0)`), y2 = (0, l.d)(0), h2 = (0, l.d)(1), f2 = (0, a.useRef)(null), [g2, x2] = (0, a.useState)(() => Math.floor(t2.get() * e2.duration));
    function _2(e3) {
      let i3 = f2.current, n2 = (e3 - i3.left) / i3.width;
      t2.set(v(n2, 0, 1)), y2.set(
        n2 < 0 ? P(n2 * i3.width, i3.width, 0.3) : n2 > 1 ? P((n2 - 1) * i3.width, i3.width, 0.3) : 0
      );
    }
    function w2(e3) {
      f2.current?.pointer === e3.pointerId && (f2.current = null, i2(false), (0, o.i)(h2, 1, m.T.spring.snappy), (0, o.i)(y2, 0, { type: "spring", visualDuration: 0.4, bounce: 0 }), d2(t2.get()));
    }
    (0, s.L)(t2, "change", (t3) => x2(Math.floor(t3 * e2.duration)));
    let k2 = c2.map(
      (e3, t3) => (0, n.jsx)("span", { style: { height: `${100 * e3}%` } }, t3)
    );
    return (0, n.jsxs)("div", {
      className: b().scrubber,
      children: [
        (0, n.jsxs)(u.PY1.div, {
          className: b().wave,
          role: "slider",
          tabIndex: 0,
          "aria-label": "Position",
          "aria-valuemin": 0,
          "aria-valuemax": e2.duration,
          "aria-valuenow": g2,
          "aria-valuetext": `${j(g2)} of ${j(e2.duration)}`,
          style: { x: y2, scaleY: h2 },
          onPointerDown: function(e3) {
            if (f2.current || 0 !== e3.button) return;
            let t3 = e3.currentTarget.getBoundingClientRect();
            e3.currentTarget.setPointerCapture(e3.pointerId), f2.current = {
              pointer: e3.pointerId,
              left: t3.left,
              width: t3.width
            }, i2(true), (0, o.i)(h2, 1.18, m.T.spring.snappy), _2(e3.clientX);
          },
          onPointerMove: function(e3) {
            f2.current?.pointer === e3.pointerId && _2(e3.clientX);
          },
          onPointerUp: w2,
          onPointerCancel: w2,
          onKeyDown: function(i3) {
            let n2 = 5 / e2.duration, a2 = {
              ArrowRight: n2,
              ArrowUp: n2,
              ArrowLeft: -n2,
              ArrowDown: -n2,
              PageUp: 6 * n2,
              PageDown: -(6 * n2),
              Home: -1,
              End: 1
            };
            if (!(i3.key in a2)) return;
            i3.preventDefault();
            let r2 = v(t2.get() + a2[i3.key], 0, 0.999);
            t2.set(r2), d2(r2);
          },
          children: [
            (0, n.jsx)("span", {
              className: b().bars,
              "aria-hidden": "true",
              children: k2
            }),
            (0, n.jsx)(u.PY1.span, {
              className: b().bars,
              "data-played": true,
              "aria-hidden": "true",
              style: { clipPath: p2 },
              children: k2
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: b().times,
          "aria-hidden": "true",
          children: [
            (0, n.jsx)("span", { children: j(g2) }),
            (0, n.jsxs)("span", {
              children: ["\u2212", j(Math.max(0, e2.duration - g2))]
            })
          ]
        })
      ]
    });
  }
  function T({
    tracks: e2,
    index: t2,
    defaultIndex: i2 = 0,
    onIndexChange: r2,
    playing: s2,
    defaultPlaying: w2 = false,
    onPlayingChange: j2,
    currentTime: M2,
    onSeek: Y2,
    defaultExpanded: S2 = false,
    label: C2 = "Now playing",
    className: R2
  }) {
    let $ = (0, d.I)() ?? false, D = (0, a.useId)(), [I, E] = (0, a.useState)(i2), [L, z] = (0, a.useState)(w2), [W, K] = (0, a.useState)(S2), [q, G] = (0, a.useState)(1), Q = v(t2 ?? I, 0, e2.length - 1), U = s2 ?? L, H = e2[Q], O = (0, l.d)(0), B = (0, l.d)(0), V = (0, a.useRef)(null), X = (0, a.useRef)(null), F = (0, a.useRef)(null), Z = (0, a.useRef)(true), J = (0, a.useRef)(null), ee = (0, l.d)("auto"), et = (0, a.useRef)({ reduced: $, expanded: W });
    (0, a.useEffect)(() => {
      et.current = { reduced: $, expanded: W };
    }), (0, a.useEffect)(() => {
      let e3 = J.current;
      if (!e3) return;
      let t3 = new ResizeObserver(() => {
        let t4 = e3.offsetHeight, i3 = ee.get();
        if ("number" != typeof i3) return void ee.jump(t4);
        if (0.5 > Math.abs(i3 - t4)) return;
        let { reduced: n2, expanded: a2 } = et.current;
        (0, o.i)(
          ee,
          t4,
          n2 ? { duration: m.T.duration.fast } : { type: "spring", visualDuration: 0.46, bounce: 0.1 * !!a2 }
        );
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [ee]);
    let ei = (0, a.useRef)({
      playing: U,
      index: Q,
      count: e2.length,
      duration: H.duration
    }), en = (0, a.useRef)(false);
    function ea(t3) {
      if (t3 < 0 && O.get() * H.duration > 3) {
        (0, o.i)(O, 0, $ ? { duration: 0 } : m.T.spring.smooth), Y2?.(0);
        return;
      }
      let i3 = (Q + t3 + e2.length) % e2.length;
      G(t3), O.set(0), E(i3), r2?.(i3);
    }
    function er(e3) {
      let t3 = V.current;
      if (!t3 || t3.pointer !== e3.pointerId) return;
      V.current = null;
      let i3 = B.get() > 70 || t3.velocity > 0.5;
      i3 && K(false), (0, o.i)(B, 0, {
        type: "spring",
        visualDuration: 0.4,
        bounce: 0.25 * !i3
      });
    }
    (0, a.useEffect)(() => {
      ei.current = {
        playing: U,
        index: Q,
        count: e2.length,
        duration: H.duration
      };
    }), (0, a.useEffect)(() => {
      en.current = false;
    }, [Q, W]), (0, a.useEffect)(() => {
      void 0 === M2 || en.current || O.set(v(M2 / ei.current.duration, 0, 1));
    }, [M2, O]), (0, c.N)((e3, t3) => {
      let i3 = ei.current;
      if (!i3.playing || V.current || en.current) return;
      let n2 = O.get() + t3 / 1e3 / i3.duration;
      if (n2 < 1) return void O.set(n2);
      let a2 = (i3.index + 1) % i3.count;
      O.set(0), G(1), E(a2), r2?.(a2);
    }), (0, a.useEffect)(() => {
      if (Z.current) {
        Z.current = false;
        return;
      }
      (W ? F : X).current?.focus({ preventScroll: true });
    }, [W]);
    let el = $ ? { duration: m.T.duration.fast } : { type: "spring", visualDuration: 0.46, bounce: 0.1 * !!W }, es = U ? h.A : f.A, eo = `${U ? "Pause" : "Play"} ${H.title}`, eu = {
      initial: { opacity: 0, y: 6, filter: `blur(${m.T.blur.subtle}px)` },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: {
        opacity: 0,
        y: -6,
        transition: { duration: m.T.duration.instant }
      },
      transition: {
        duration: m.T.duration.standard,
        ease: [...m.T.ease.enter]
      }
    }, ed = (e3, t3 = 8) => ({
      initial: {
        opacity: 0,
        y: $ ? 0 : t3,
        filter: $ ? "blur(0px)" : `blur(${m.T.blur.subtle}px)`
      },
      animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: m.T.duration.standard,
          ease: [...m.T.ease.enter],
          delay: $ ? 0 : e3
        }
      },
      exit: {
        opacity: 0,
        filter: $ ? "blur(0px)" : `blur(${m.T.blur.subtle}px)`,
        transition: {
          duration: $ ? m.T.duration.instant : 0.1,
          ease: [...m.T.ease.exit]
        }
      }
    });
    return (0, n.jsx)(p.x, {
      reducedMotion: "user",
      children: (0, n.jsxs)("section", {
        className: [b().root, R2].filter(Boolean).join(" "),
        "aria-label": C2,
        "aria-describedby": D,
        onKeyDown: (e3) => {
          "Escape" === e3.key && W && (e3.stopPropagation(), K(false));
        },
        children: [
          (0, n.jsxs)("p", {
            id: D,
            className: b().srOnly,
            "aria-live": "polite",
            children: [
              H.title,
              " by ",
              H.artist,
              ", ",
              U ? "playing" : "paused"
            ]
          }),
          (0, n.jsx)(u.PY1.div, {
            className: b().shell,
            "data-expanded": W || void 0,
            initial: false,
            animate: { borderRadius: W ? 30 : 22 },
            style: { y: B, height: ee },
            transition: el,
            children: (0, n.jsxs)("div", {
              ref: J,
              className: b().inner,
              children: [
                (0, n.jsxs)(u.PY1.div, {
                  layout: true,
                  className: b().art,
                  initial: false,
                  animate: { borderRadius: W ? 20 : 12 },
                  transition: el,
                  onPointerDown: W ? function(e3) {
                    V.current || 0 !== e3.button || (e3.currentTarget.setPointerCapture(e3.pointerId), B.stop(), V.current = {
                      pointer: e3.pointerId,
                      y: e3.clientY,
                      lastY: e3.clientY,
                      lastT: e3.timeStamp,
                      velocity: 0
                    });
                  } : void 0,
                  onPointerMove: W ? function(e3) {
                    let t3 = V.current;
                    if (!t3 || t3.pointer !== e3.pointerId) return;
                    let i3 = e3.clientY - t3.y;
                    B.set(i3 > 0 ? 0.6 * i3 : P(i3, 200, 0.2)), t3.velocity = (e3.clientY - t3.lastY) / Math.max(1, e3.timeStamp - t3.lastT), t3.lastY = e3.clientY, t3.lastT = e3.timeStamp;
                  } : void 0,
                  onPointerUp: W ? er : void 0,
                  onPointerCancel: W ? er : void 0,
                  children: [
                    (0, n.jsx)(u.PY1.div, {
                      layout: true,
                      className: b().artSquare,
                      transition: el,
                      children: (0, n.jsx)(y.N, {
                        initial: false,
                        custom: q,
                        children: (0, n.jsx)(
                          u.PY1.img,
                          {
                            className: b().artImage,
                            src: H.artwork,
                            alt: H.artworkAlt ?? "",
                            draggable: false,
                            decoding: "async",
                            custom: q,
                            variants: {
                              enter: (e3) => $ ? { opacity: 0 } : {
                                opacity: 0,
                                x: `${24 * e3}%`,
                                scale: 0.96,
                                filter: `blur(${m.T.blur.soft}px)`
                              },
                              center: {
                                opacity: 1,
                                x: "0%",
                                scale: 1,
                                filter: "blur(0px)"
                              },
                              exit: (e3) => $ ? { opacity: 0 } : {
                                opacity: 0,
                                x: `${-24 * e3}%`,
                                scale: 0.96,
                                filter: `blur(${m.T.blur.soft}px)`
                              }
                            },
                            initial: "enter",
                            animate: "center",
                            exit: "exit",
                            transition: {
                              ...m.T.spring.smooth,
                              opacity: { duration: m.T.duration.standard }
                            }
                          },
                          H.id
                        )
                      })
                    }),
                    (0, n.jsx)(y.N, {
                      initial: false,
                      children: W && (0, n.jsx)(
                        u.PY1.button,
                        {
                          ref: F,
                          type: "button",
                          className: b().collapse,
                          "aria-label": "Collapse player",
                          "aria-expanded": "true",
                          onClick: () => K(false),
                          onPointerDown: (e3) => e3.stopPropagation(),
                          ...ed(0.16, 0),
                          children: (0, n.jsx)(g.A, {
                            size: 18,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          })
                        },
                        "collapse"
                      )
                    })
                  ]
                }),
                (0, n.jsx)(y.N, {
                  initial: false,
                  mode: "popLayout",
                  children: W ? [
                    (0, n.jsx)(
                      u.PY1.div,
                      {
                        className: b().info,
                        ...ed(0.08, 12),
                        children: (0, n.jsx)(y.N, {
                          initial: false,
                          mode: "popLayout",
                          children: (0, n.jsxs)(
                            u.PY1.div,
                            {
                              className: b().infoText,
                              ...eu,
                              children: [
                                (0, n.jsx)("h3", {
                                  className: b().titleLarge,
                                  children: H.title
                                }),
                                (0, n.jsx)("p", {
                                  className: b().artistLarge,
                                  children: H.artist
                                })
                              ]
                            },
                            H.id
                          )
                        })
                      },
                      "info"
                    ),
                    (0, n.jsx)(
                      u.PY1.div,
                      {
                        className: b().waveArea,
                        ...ed(0.12, 14),
                        children: (0, n.jsx)(
                          N,
                          {
                            track: H,
                            progress: O,
                            onScrub: (e3) => {
                              en.current = e3;
                            },
                            onSeek: (e3) => {
                              O.set(e3), Y2?.(e3 * H.duration);
                            }
                          },
                          H.id
                        )
                      },
                      "wave"
                    ),
                    (0, n.jsx)(
                      u.PY1.button,
                      {
                        type: "button",
                        className: b().prev,
                        "aria-label": "Previous track",
                        onClick: () => ea(-1),
                        ...ed(0.14, 10),
                        children: (0, n.jsx)(x.A, {
                          size: 20,
                          strokeWidth: 1.75,
                          fill: "currentColor",
                          "aria-hidden": "true"
                        })
                      },
                      "prev"
                    )
                  ] : [
                    (0, n.jsx)(
                      u.PY1.button,
                      {
                        ref: X,
                        type: "button",
                        className: b().miniMain,
                        "aria-label": `Expand player, ${H.title} by ${H.artist}`,
                        "aria-expanded": "false",
                        onClick: () => K(true),
                        ...ed(0.1, 4),
                        children: (0, n.jsx)(y.N, {
                          initial: false,
                          mode: "popLayout",
                          children: (0, n.jsxs)(
                            u.PY1.span,
                            {
                              className: b().miniText,
                              ...eu,
                              children: [
                                (0, n.jsx)("span", {
                                  className: b().miniTitle,
                                  children: H.title
                                }),
                                (0, n.jsx)("span", {
                                  className: b().miniArtist,
                                  children: H.artist
                                })
                              ]
                            },
                            H.id
                          )
                        })
                      },
                      "main"
                    ),
                    (0, n.jsx)(
                      u.PY1.span,
                      {
                        className: b().levelsArea,
                        ...ed(0.14, 0),
                        children: (0, n.jsx)(k, { playing: U })
                      },
                      "levels"
                    ),
                    (0, n.jsx)(
                      u.PY1.span,
                      {
                        className: b().miniProgressTrack,
                        "aria-hidden": "true",
                        ...ed(0.16, 0),
                        children: (0, n.jsx)(u.PY1.span, {
                          className: b().miniProgress,
                          style: { scaleX: O }
                        })
                      },
                      "progress"
                    )
                  ]
                }),
                (0, n.jsx)(u.PY1.button, {
                  layout: true,
                  type: "button",
                  className: b().play,
                  "aria-label": eo,
                  onClick: () => {
                    var e3;
                    z(e3 = !U), j2?.(e3);
                  },
                  transition: el,
                  children: (0, n.jsx)(A, {
                    icon: es,
                    playing: U,
                    size: W ? 24 : 18
                  })
                }),
                (0, n.jsx)(u.PY1.button, {
                  layout: true,
                  type: "button",
                  className: b().next,
                  "aria-label": "Next track",
                  onClick: () => ea(1),
                  transition: el,
                  children: (0, n.jsx)(_.A, {
                    size: W ? 20 : 18,
                    strokeWidth: 1.75,
                    fill: "currentColor",
                    "aria-hidden": "true"
                  })
                })
              ]
            })
          })
        ]
      })
    });
  }
  function A({ icon: e2, playing: t2, size: i2 }) {
    return (0, n.jsx)("span", {
      className: b().playGlyph,
      style: { width: i2, height: i2 },
      children: (0, n.jsx)(y.N, {
        initial: false,
        children: (0, n.jsx)(
          u.PY1.span,
          {
            className: b().playPhase,
            "data-icon": t2 ? "pause" : "play",
            initial: {
              opacity: 0,
              scale: 0.6,
              filter: `blur(${m.T.blur.subtle}px)`
            },
            animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
            exit: {
              opacity: 0,
              scale: 0.6,
              filter: `blur(${m.T.blur.subtle}px)`,
              transition: { duration: m.T.duration.instant }
            },
            transition: m.T.spring.snappy,
            children: (0, n.jsx)(e2, {
              size: i2,
              strokeWidth: 1.75,
              fill: "currentColor",
              "aria-hidden": "true"
            })
          },
          t2 ? "pause" : "play"
        )
      })
    });
  }
  var M = i(20207), Y = i.n(M);
  let S = (e2) => `media/specials/now-playing-${e2}.jpg`, C = [
    {
      id: "undertow",
      title: "Undertow",
      artist: "Hollis Reed",
      duration: 214,
      artwork: S("undertow"),
      artworkAlt: "A wave breaking in amber light, seen from above"
    },
    {
      id: "dune-light",
      title: "Dune light",
      artist: "The Meridian Line",
      duration: 247,
      artwork: S("dune"),
      artworkAlt: "Sand dunes under a pale sky"
    },
    {
      id: "halo",
      title: "Halo, slowly",
      artist: "Avery Cole",
      duration: 196,
      artwork: S("halo"),
      artworkAlt: "A circle of light painted in the dark"
    },
    {
      id: "concrete-garden",
      title: "Concrete garden",
      artist: "Sloane & Wilder",
      duration: 231,
      artwork: S("concrete"),
      artworkAlt: "Angular concrete facade in hard sunlight"
    },
    {
      id: "tidepool",
      title: "Tidepool",
      artist: "Hollis Reed",
      duration: 188,
      artwork: S("tide"),
      artworkAlt: "Teal swirls of ink in water"
    }
  ];
  function R() {
    return (0, n.jsx)("div", {
      className: Y().demo,
      children: (0, n.jsx)(T, { tracks: C, label: "Now playing" })
    });
  }
}

__m(__module,__exports,__require);
}