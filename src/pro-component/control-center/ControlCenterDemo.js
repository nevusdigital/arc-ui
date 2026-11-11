function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { ControlCenterDemo: () => X });
  var i = n(95155), a = n(51811);
  let r = {
    name: "headphones",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
          key: "1xhozi"
        }
      ]
    ]
  };
  r.node;
  let o = (0, a.A)(r);
  var s = n(35302), l = n(95331), c = n(12115), d = n(80642), u = n(25354), p = n(18310), h = n(28245), m = n(92171), f = n(55809), _ = n(7890), y = n(9937), x = n(57700), g = n(76721);
  let v = {
    name: "monitor-up",
    size: 24,
    node: [
      ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }],
      ["path", { d: "M12 13V7", key: "h0r20n" }],
      [
        "rect",
        { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }
      ],
      ["path", { d: "M12 17v4", key: "1riwvh" }],
      ["path", { d: "M8 21h8", key: "1ev6f3" }]
    ]
  };
  v.node;
  let b = (0, a.A)(v);
  var w = n(28980), j = n(20109), k = n(84614), A = n(15298), N = n(64526), M = n(8117), P = n(14929), T = n(9005), C = n(7770), I = n(52290), D = n.n(I);
  let z = (e2, t2, n2) => Math.min(n2, Math.max(t2, e2));
  function S(e2, t2, n2 = 0.55) {
    let i2 = Math.sign(e2), a2 = Math.abs(e2);
    return a2 * t2 * n2 * i2 / (t2 + n2 * a2);
  }
  let L = (e2) => e2.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  function Y({ icon: e2, swapKey: t2, size: n2 = 20 }) {
    return (0, i.jsx)("span", {
      className: D().swap,
      style: { width: n2, height: n2 },
      "aria-hidden": "true",
      children: (0, i.jsx)(d.N, {
        initial: false,
        children: (0, i.jsx)(
          u.PY1.span,
          {
            className: D().swapPhase,
            initial: {
              opacity: 0,
              scale: 0.7,
              filter: `blur(${C.T.blur.subtle}px)`
            },
            animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
            exit: {
              opacity: 0,
              scale: 0.7,
              filter: `blur(${C.T.blur.subtle}px)`,
              transition: { duration: C.T.duration.instant }
            },
            transition: {
              scale: C.T.spring.snappy,
              opacity: { duration: C.T.duration.fast },
              filter: { duration: C.T.duration.fast }
            },
            children: (0, i.jsx)(e2, { size: n2, strokeWidth: 1.75 })
          },
          t2
        )
      })
    });
  }
  function E({ text: e2 }) {
    return (0, i.jsx)("span", {
      className: D().roll,
      children: (0, i.jsx)(d.N, {
        initial: false,
        mode: "popLayout",
        children: (0, i.jsx)(
          u.PY1.span,
          {
            className: D().rollPhase,
            initial: {
              opacity: 0,
              y: "0.6em",
              filter: `blur(${C.T.blur.subtle}px)`
            },
            animate: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: {
              opacity: 0,
              y: "-0.6em",
              filter: `blur(${C.T.blur.subtle}px)`,
              transition: { duration: C.T.duration.instant }
            },
            transition: {
              duration: C.T.duration.standard,
              ease: [...C.T.ease.enter]
            },
            children: e2
          },
          e2
        )
      })
    });
  }
  function K({
    id: e2,
    icon: t2,
    iconKey: n2,
    title: a2,
    status: r2,
    active: o2,
    wide: s2,
    open: l2,
    onPress: c2,
    onExpand: d2,
    expandLabel: p2,
    registerExpand: h2
  }) {
    return (0, i.jsx)("div", {
      className: D().slot,
      "data-wide": s2 || void 0,
      children: !l2 && (0, i.jsxs)(u.PY1.div, {
        layoutId: `cc-${e2}`,
        className: D().tile,
        "data-active": o2 || void 0,
        style: { borderRadius: 22 },
        whileTap: { scale: 0.975 },
        transition: C.T.spring.morph,
        children: [
          (0, i.jsxs)("button", {
            type: "button",
            className: D().tileMain,
            "aria-pressed": o2,
            onClick: c2,
            children: [
              (0, i.jsx)(u.PY1.span, {
                layoutId: `cc-${e2}-icon`,
                layout: "position",
                className: D().tileIcon,
                children: (0, i.jsx)(Y, { icon: t2, swapKey: n2 })
              }),
              (0, i.jsxs)("span", {
                className: D().tileText,
                children: [
                  (0, i.jsx)(u.PY1.span, {
                    layoutId: `cc-${e2}-title`,
                    layout: "position",
                    className: D().tileTitle,
                    children: a2
                  }),
                  (0, i.jsx)(u.PY1.span, {
                    layout: "position",
                    className: D().tileStatus,
                    children: (0, i.jsx)(E, { text: r2 })
                  })
                ]
              })
            ]
          }),
          d2 && (0, i.jsx)(u.PY1.button, {
            layoutId: `cc-${e2}-action`,
            layout: "position",
            ref: h2,
            type: "button",
            className: D().tileExpand,
            "aria-label": p2,
            "aria-haspopup": "dialog",
            onClick: d2,
            children: (0, i.jsx)(g.A, {
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            })
          })
        ]
      })
    });
  }
  let $ = { type: "spring", visualDuration: 0.3, bounce: 0 };
  function U({ checked: e2, onChange: t2, label: n2, description: a2 }) {
    let r2 = (0, c.useId)(), o2 = (0, p.I)(), [s2, l2] = (0, c.useState)(false), d2 = (0, h.d)(1), f2 = (0, c.useRef)(e2);
    (0, c.useEffect)(() => {
      if (f2.current === e2 || (f2.current = e2, o2)) return;
      let t3 = (0, m.i)(d2, [1, 1.16, 1], {
        duration: 0.34,
        times: [0, 0.4, 1],
        ease: ["easeOut", "easeInOut"]
      });
      return () => t3.stop();
    }, [e2, o2, d2]);
    let _2 = s2 && !o2 ? 5 : 0;
    return (0, i.jsxs)("div", {
      className: D().row,
      children: [
        (0, i.jsxs)("span", {
          className: D().rowText,
          children: [
            (0, i.jsx)("span", {
              id: `${r2}-label`,
              className: D().rowLabel,
              children: n2
            }),
            a2 && (0, i.jsx)("span", {
              className: D().rowDescription,
              children: a2
            })
          ]
        }),
        (0, i.jsx)("button", {
          type: "button",
          role: "switch",
          "aria-checked": e2,
          "aria-labelledby": `${r2}-label`,
          className: D().switch,
          "data-on": e2 || void 0,
          onClick: () => t2(!e2),
          onPointerDown: (e3) => {
            0 === e3.button && l2(true);
          },
          onPointerUp: () => l2(false),
          onPointerLeave: () => l2(false),
          onPointerCancel: () => l2(false),
          onKeyDown: (e3) => {
            " " === e3.key && l2(true);
          },
          onKeyUp: () => l2(false),
          onBlur: () => l2(false),
          children: (0, i.jsx)(u.PY1.span, {
            className: D().switchThumb,
            style: { scaleX: d2 },
            initial: false,
            animate: { x: e2 ? 16 - _2 : 0, width: 18 + _2 },
            transition: o2 ? { duration: 0 } : { x: $, width: C.T.spring.snappy }
          })
        })
      ]
    });
  }
  function R({
    label: e2,
    value: t2,
    min: n2,
    max: a2,
    step: r2,
    segments: o2,
    format: s2,
    icon: l2,
    trailing: d2,
    onChange: y2
  }) {
    let x2 = (0, c.useId)(), g2 = a2 - n2, v2 = (0, h.d)((t2 - n2) / g2), b2 = (0, h.d)(0), w2 = (0, c.useRef)(null), j2 = (0, f.G)(v2, (e3) => `inset(0 ${(1 - z(e3, 0, 1)) * 100}% 0 0)`), k2 = (0, f.G)(v2, (e3) => s2(Math.round((n2 + z(e3, 0, 1) * g2) / r2) * r2)), A2 = (0, h.d)(240), N2 = (0, f.G)(() => 1 + Math.abs(b2.get()) / Math.max(1, A2.get())), M2 = (0, f.G)(b2, (e3) => e3 / 2), P2 = (0, h.d)(1), T2 = (0, p.I)() ?? false;
    function I2(e3) {
      let t3 = z(Math.round(e3 / r2) * r2, n2, a2);
      y2(t3), T2 ? v2.set((t3 - n2) / g2) : (0, m.i)(v2, (t3 - n2) / g2, C.T.spring.snappy);
    }
    function L2(e3) {
      let t3 = w2.current;
      !t3 || t3.pointer !== e3.pointerId || (w2.current = null, (0, m.i)(P2, 1, C.T.spring.snappy), ("pointerup" === e3.type || t3.moved) && ((0, m.i)(b2, 0, { type: "spring", visualDuration: 0.4, bounce: 0 }), I2(
        n2 + (t3.moved ? v2.get() : z((e3.clientX - t3.left) / t3.width, 0, 1)) * g2
      )));
    }
    return (0, _.L)(v2, "change", (e3) => {
      let i2 = Math.round((n2 + z(e3, 0, 1) * g2) / r2) * r2;
      w2.current && i2 !== t2 && y2(i2);
    }), (0, i.jsxs)("div", {
      className: D().meter,
      children: [
        (0, i.jsxs)("div", {
          className: D().meterHead,
          children: [
            (0, i.jsx)("span", {
              className: D().meterIcon,
              "aria-hidden": "true",
              children: l2
            }),
            (0, i.jsx)("span", {
              id: `${x2}-label`,
              className: D().meterLabel,
              children: e2
            }),
            d2?.(v2),
            (0, i.jsx)(u.PY1.span, {
              className: D().meterValue,
              "aria-hidden": "true",
              children: k2
            })
          ]
        }),
        (0, i.jsxs)(u.PY1.div, {
          className: D().meterTrack,
          role: "slider",
          tabIndex: 0,
          "aria-labelledby": `${x2}-label`,
          "aria-valuemin": n2,
          "aria-valuemax": a2,
          "aria-valuenow": t2,
          "aria-valuetext": s2(t2),
          style: { scaleX: N2, scaleY: P2, x: M2 },
          onPointerDown: function(e3) {
            if (w2.current || 0 !== e3.button) return;
            let t3 = e3.currentTarget.getBoundingClientRect(), n3 = e3.currentTarget.closest("section"), i2 = n3?.getBoundingClientRect(), a3 = n3 ? getComputedStyle(n3) : null, r3 = a3 ? (parseFloat(a3.borderLeftWidth) || 0) + (parseFloat(a3.paddingLeft) || 0) : 0, o3 = i2 ? Math.max(
              0,
              Math.min(t3.left - i2.left, i2.right - t3.right) - r3
            ) : 6;
            e3.currentTarget.setPointerCapture(e3.pointerId), v2.stop(), A2.set(t3.width), T2 || (0, m.i)(P2, 1.18, C.T.spring.snappy), w2.current = {
              pointer: e3.pointerId,
              x: e3.clientX,
              start: v2.get(),
              width: t3.width,
              left: t3.left,
              room: o3,
              moved: false
            };
          },
          onPointerMove: function(e3) {
            let t3 = w2.current;
            if (!t3 || t3.pointer !== e3.pointerId) return;
            let n3 = e3.clientX - t3.x;
            if (!t3.moved && 3 > Math.abs(n3)) return;
            t3.moved = true;
            let i2 = t3.start + n3 / t3.width;
            v2.set(z(i2, 0, 1)), T2 || b2.set(
              i2 < 0 ? S(i2 * t3.width, t3.room) : i2 > 1 ? S((i2 - 1) * t3.width, t3.room) : 0
            );
          },
          onPointerUp: L2,
          onPointerCancel: L2,
          onLostPointerCapture: L2,
          onKeyDown: function(e3) {
            let i2 = {
              ArrowRight: r2,
              ArrowUp: r2,
              ArrowLeft: -r2,
              ArrowDown: -r2,
              PageUp: 4 * r2,
              PageDown: -(4 * r2),
              Home: -1 / 0,
              End: 1 / 0
            };
            if (!(e3.key in i2)) return;
            e3.preventDefault();
            let o3 = i2[e3.key];
            I2(o3 === 1 / 0 ? a2 : o3 === -1 / 0 ? n2 : z(t2 + o3, n2, a2));
          },
          children: [
            (0, i.jsx)("span", {
              className: D().meterSegments,
              "aria-hidden": "true",
              children: Array.from(
                { length: o2 },
                (e3, t3) => (0, i.jsx)("span", {}, t3)
              )
            }),
            (0, i.jsx)(u.PY1.span, {
              className: D().meterSegments,
              "data-fill": true,
              "aria-hidden": "true",
              style: { clipPath: j2 },
              children: Array.from(
                { length: o2 },
                (e3, t3) => (0, i.jsx)("span", {}, t3)
              )
            })
          ]
        })
      ]
    });
  }
  function H({ minutes: e2, onChange: t2, until: n2 }) {
    let a2 = (0, h.d)(e2), r2 = (0, h.d)(0), o2 = (0, p.I)() ?? false, s2 = (0, c.useRef)(null), l2 = (0, c.useRef)(null), d2 = (0, f.G)(() => (a2.get() + r2.get()) / 120 * 360), y2 = (0, f.G)(a2, (e3) => e3 / 120), x2 = (0, f.G)(a2, (e3) => String(Math.round(e3))), g2 = (0, f.G)(a2, (e3) => `Until ${n2(5 * Math.round(e3 / 5))}`);
    function v2(e3) {
      let t3 = l2.current.getBoundingClientRect();
      return (180 * Math.atan2(
        e3.clientX - (t3.left + t3.width / 2),
        -(e3.clientY - (t3.top + t3.height / 2))
      ) / Math.PI + 360) % 360;
    }
    function b2(e3) {
      let n3 = s2.current;
      if (!n3 || n3.pointer !== e3.pointerId) return;
      s2.current = null;
      let i2 = z(5 * Math.round(a2.get() / 5), 5, 120);
      (0, m.i)(r2, 0, { type: "spring", visualDuration: 0.4, bounce: 0 }), (0, m.i)(a2, i2, o2 ? { duration: 0 } : C.T.spring.snappy), t2(i2);
    }
    (0, c.useEffect)(() => {
      if (s2.current) return;
      let t3 = (0, m.i)(a2, e2, o2 ? { duration: 0 } : C.T.spring.snappy);
      return () => t3.stop();
    }, [e2, a2, o2]), (0, _.L)(a2, "change", (n3) => {
      let i2 = z(5 * Math.round(n3 / 5), 5, 120);
      s2.current && i2 !== e2 && t2(i2);
    });
    let w2 = Array.from({ length: 24 }, (e3, t3) => t3);
    return (0, i.jsxs)("div", {
      ref: l2,
      className: D().dial,
      role: "slider",
      tabIndex: 0,
      "aria-label": "Session length",
      "aria-valuemin": 5,
      "aria-valuemax": 120,
      "aria-valuenow": e2,
      "aria-valuetext": `${e2} minutes, until ${n2(e2)}`,
      onPointerDown: function(e3) {
        s2.current || 0 !== e3.button || (e3.currentTarget.setPointerCapture(e3.pointerId), a2.stop(), s2.current = { pointer: e3.pointerId, angle: v2(e3), raw: a2.get() });
      },
      onPointerMove: function(e3) {
        let t3 = s2.current;
        if (!t3 || t3.pointer !== e3.pointerId) return;
        let n3 = v2(e3), i2 = n3 - t3.angle;
        i2 > 180 && (i2 -= 360), i2 < -180 && (i2 += 360), t3.angle = n3, t3.raw += i2 / 360 * 120;
        let l3 = z(t3.raw, 5, 120);
        a2.set(l3), o2 || r2.set(S(t3.raw - l3, 30, 0.4));
      },
      onPointerUp: b2,
      onPointerCancel: b2,
      onKeyDown: function(n3) {
        let i2 = {
          ArrowRight: 5,
          ArrowUp: 5,
          ArrowLeft: -5,
          ArrowDown: -5,
          PageUp: 15,
          PageDown: -15,
          Home: -120,
          End: 120
        };
        n3.key in i2 && (n3.preventDefault(), t2(z(e2 + i2[n3.key], 5, 120)));
      },
      children: [
        (0, i.jsxs)("svg", {
          className: D().dialSvg,
          viewBox: "0 0 200 200",
          "aria-hidden": "true",
          children: [
            w2.map((e3) => {
              let t3 = e3 % 3 == 0, n3 = e3 / w2.length * Math.PI * 2, a3 = t3 ? 76 : 80;
              return (0, i.jsx)(
                "line",
                {
                  className: D().dialTick,
                  "data-major": t3 || void 0,
                  x1: 100 + Math.sin(n3) * a3,
                  y1: 100 - Math.cos(n3) * a3,
                  x2: 100 + 86 * Math.sin(n3),
                  y2: 100 - 86 * Math.cos(n3)
                },
                e3
              );
            }),
            (0, i.jsx)("circle", {
              className: D().dialTrack,
              cx: "100",
              cy: "100",
              r: "94"
            }),
            (0, i.jsx)(u.PY1.circle, {
              className: D().dialArc,
              cx: "100",
              cy: "100",
              r: "94",
              style: { pathLength: y2, rotate: -90 }
            })
          ]
        }),
        (0, i.jsx)(u.PY1.div, {
          className: D().dialKnobArm,
          style: { rotate: d2 },
          "aria-hidden": "true",
          children: (0, i.jsx)("span", { className: D().dialKnob })
        }),
        (0, i.jsxs)("div", {
          className: D().dialCenter,
          "aria-hidden": "true",
          children: [
            (0, i.jsxs)("span", {
              className: D().dialCount,
              children: [
                (0, i.jsx)(u.PY1.span, { children: x2 }),
                (0, i.jsx)("span", {
                  className: D().dialUnit,
                  children: "min"
                })
              ]
            }),
            (0, i.jsx)(u.PY1.span, { className: D().dialUntil, children: g2 })
          ]
        })
      ]
    });
  }
  function q({
    focusModes: e2,
    channels: t2,
    people: n2 = [],
    defaultVolume: a2 = 60,
    defaultTextSize: r2 = 100,
    formatTime: o2 = L,
    onStateChange: s2,
    label: l2 = "Quick settings",
    className: h2
  }) {
    let m2 = (0, p.I)() ?? false, f2 = (0, c.useId)(), [_2, g2] = (0, c.useState)(() => ({
      focus: null,
      notifications: true,
      channels: Object.fromEntries(t2.map((e3) => [e3.id, e3.defaultOn ?? true])),
      presenting: false,
      volume: z(a2, 0, 100),
      textSize: z(r2, 85, 130)
    })), [v2, I2] = (0, c.useState)(null), [S2, $2] = (0, c.useState)({
      mode: e2[0]?.id ?? "",
      minutes: e2[0]?.defaultMinutes ?? 45,
      startedAt: 0
    }), O2 = (0, c.useRef)({ focus: null, notifications: null }), G2 = (0, c.useRef)(null), V2 = (0, c.useRef)(null), B2 = (0, c.useRef)(null);
    function F2(e3) {
      let t3 = { ..._2, ...e3 };
      g2(t3), s2?.(t3);
    }
    let X2 = (e3) => o2(new Date(S2.startedAt + 6e4 * e3));
    function Q(t3) {
      if ("focus" === t3) {
        let t4 = _2.focus, n3 = e2.find((e3) => e3.id === t4?.mode) ?? e2[0];
        $2({
          mode: n3?.id ?? "",
          minutes: t4?.minutes ?? n3?.defaultMinutes ?? 45,
          startedAt: Date.now()
        });
      }
      B2.current = t3, I2(t3);
    }
    function J() {
      I2(null);
    }
    (0, c.useEffect)(() => {
      if (v2) return void V2.current?.focus({ preventScroll: true });
      let e3 = B2.current;
      if (!e3) return;
      let t3 = requestAnimationFrame(
        () => O2.current[e3]?.focus({ preventScroll: true })
      );
      return () => cancelAnimationFrame(t3);
    }, [v2]);
    let Z = e2.find((e3) => e3.id === _2.focus?.mode), ee = e2.find((e3) => e3.id === S2.mode) ?? e2[0], et = ("focus" === v2 ? ee : Z ?? e2[0])?.icon ?? b, en = t2.filter((e3) => _2.channels[e3.id]).length, ei = 0 === _2.volume ? w.A : _2.volume < 50 ? j.A : k.A, ea = m2 ? { duration: C.T.duration.fast } : C.T.spring.morph;
    return (0, i.jsx)(y.x, {
      reducedMotion: "user",
      transition: C.T.spring.morph,
      children: (0, i.jsx)("section", {
        className: [D().panel, h2].filter(Boolean).join(" "),
        "aria-label": l2,
        "data-expanded": v2 ? "" : void 0,
        children: (0, i.jsxs)(x.o, {
          children: [
            (0, i.jsxs)("div", {
              className: D().grid,
              "aria-hidden": !!v2 || void 0,
              inert: !!v2 || void 0,
              children: [
                (0, i.jsx)(K, {
                  id: "focus",
                  wide: true,
                  icon: et,
                  iconKey: Z?.id ?? "off",
                  title: Z ? Z.label : "Focus",
                  status: _2.focus ? `Until ${_2.focus.until}` : "Off",
                  active: !!_2.focus,
                  open: "focus" === v2,
                  onPress: function() {
                    if (_2.focus) return void F2({ focus: null });
                    let t3 = e2[0];
                    t3 && F2({
                      focus: {
                        mode: t3.id,
                        minutes: t3.defaultMinutes,
                        until: o2(
                          new Date(Date.now() + 6e4 * t3.defaultMinutes)
                        )
                      }
                    });
                  },
                  onExpand: () => Q("focus"),
                  expandLabel: "Focus session settings",
                  registerExpand: (e3) => {
                    O2.current.focus = e3;
                  }
                }),
                (0, i.jsx)(K, {
                  id: "notifications",
                  icon: _2.notifications ? A.A : N.A,
                  iconKey: _2.notifications ? "on" : "off",
                  title: "Notifications",
                  status: _2.notifications ? `${en} of ${t2.length} channels` : "Paused",
                  active: _2.notifications,
                  open: "notifications" === v2,
                  onPress: () => F2({ notifications: !_2.notifications }),
                  onExpand: () => Q("notifications"),
                  expandLabel: "Notification channels",
                  registerExpand: (e3) => {
                    O2.current.notifications = e3;
                  }
                }),
                (0, i.jsx)(K, {
                  id: "presenting",
                  icon: M.A,
                  iconKey: "presenting",
                  title: "Presenting",
                  status: _2.presenting ? "Previews hidden" : "Off",
                  active: _2.presenting,
                  open: false,
                  onPress: () => F2({ presenting: !_2.presenting })
                }),
                (0, i.jsxs)("div", {
                  className: D().meters,
                  children: [
                    (0, i.jsx)(R, {
                      label: "Alert volume",
                      value: _2.volume,
                      min: 0,
                      max: 100,
                      step: 1,
                      segments: 28,
                      format: (e3) => `${e3}%`,
                      icon: (0, i.jsx)(Y, {
                        icon: ei,
                        swapKey: 0 === _2.volume ? "mute" : _2.volume < 50 ? "low" : "high",
                        size: 16
                      }),
                      onChange: (e3) => F2({ volume: e3 })
                    }),
                    (0, i.jsx)(R, {
                      label: "Text size",
                      value: _2.textSize,
                      min: 85,
                      max: 130,
                      step: 5,
                      segments: 28,
                      format: (e3) => `${e3}%`,
                      icon: (0, i.jsx)(P.A, { size: 16, strokeWidth: 1.75 }),
                      trailing: (e3) => (0, i.jsx)(W, { progress: e3 }),
                      onChange: (e3) => F2({ textSize: e3 })
                    })
                  ]
                })
              ]
            }),
            (0, i.jsxs)(d.N, {
              children: [
                v2 && (0, i.jsx)(
                  u.PY1.div,
                  {
                    className: D().scrim,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: C.T.duration.standard },
                    onClick: J,
                    "aria-hidden": "true"
                  },
                  "scrim"
                ),
                v2 && (0, i.jsxs)(
                  u.PY1.div,
                  {
                    ref: G2,
                    layoutId: `cc-${v2}`,
                    className: D().detail,
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": f2,
                    style: { borderRadius: 22 },
                    transition: ea,
                    onKeyDown: function(e3) {
                      if ("Escape" === e3.key) {
                        e3.stopPropagation(), J();
                        return;
                      }
                      if ("Tab" !== e3.key || !G2.current) return;
                      let t3 = [
                        ...G2.current.querySelectorAll(
                          "button:not([disabled]), [tabindex='0']"
                        )
                      ];
                      if (!t3.length) return;
                      let n3 = t3[0], i2 = t3[t3.length - 1];
                      e3.shiftKey && document.activeElement === n3 ? (e3.preventDefault(), i2.focus()) : e3.shiftKey || document.activeElement !== i2 || (e3.preventDefault(), n3.focus());
                    },
                    children: [
                      (0, i.jsxs)("div", {
                        className: D().detailHead,
                        children: [
                          (0, i.jsx)(u.PY1.span, {
                            layoutId: `cc-${v2}-icon`,
                            layout: "position",
                            className: D().tileIcon,
                            "data-active": "focus" === v2 || _2.notifications || void 0,
                            children: "focus" === v2 ? (0, i.jsx)(Y, {
                              icon: ee?.icon ?? b,
                              swapKey: S2.mode
                            }) : (0, i.jsx)(Y, {
                              icon: _2.notifications ? A.A : N.A,
                              swapKey: _2.notifications ? "on" : "off"
                            })
                          }),
                          (0, i.jsx)(u.PY1.h3, {
                            layoutId: `cc-${v2}-title`,
                            layout: "position",
                            id: f2,
                            className: D().detailTitle,
                            children: "focus" === v2 ? "Focus" : "Notifications"
                          }),
                          (0, i.jsx)(u.PY1.button, {
                            layoutId: `cc-${v2}-action`,
                            layout: "position",
                            ref: V2,
                            type: "button",
                            className: D().close,
                            "aria-label": "Close",
                            onClick: J,
                            children: (0, i.jsx)(T.A, {
                              size: 16,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            })
                          })
                        ]
                      }),
                      (0, i.jsx)(u.PY1.div, {
                        layout: "position",
                        className: D().detailBody,
                        initial: { opacity: 0, y: 10 * !m2 },
                        animate: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: 0.08 * !m2,
                            duration: C.T.duration.standard,
                            ease: [...C.T.ease.enter]
                          }
                        },
                        exit: {
                          opacity: 0,
                          transition: { duration: C.T.duration.instant }
                        },
                        children: "focus" === v2 ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("div", {
                              className: D().modes,
                              role: "radiogroup",
                              "aria-label": "Mode",
                              children: e2.map((e3) => {
                                let t3 = e3.id === S2.mode;
                                return (0, i.jsxs)(
                                  "button",
                                  {
                                    type: "button",
                                    role: "radio",
                                    "aria-checked": t3,
                                    className: D().mode,
                                    onClick: () => $2((t4) => ({
                                      ...t4,
                                      mode: e3.id,
                                      minutes: t4.mode === e3.id ? t4.minutes : e3.defaultMinutes
                                    })),
                                    children: [
                                      t3 && (0, i.jsx)(u.PY1.span, {
                                        layoutId: "cc-mode-highlight",
                                        className: D().modeHighlight,
                                        transition: C.T.spring.morph
                                      }),
                                      (0, i.jsx)("span", {
                                        className: D().modeLabel,
                                        children: e3.label
                                      })
                                    ]
                                  },
                                  e3.id
                                );
                              })
                            }),
                            (0, i.jsx)("p", {
                              className: D().modeNote,
                              children: (0, i.jsx)(E, {
                                text: ee?.description ?? ""
                              })
                            }),
                            (0, i.jsx)(H, {
                              minutes: S2.minutes,
                              until: X2,
                              onChange: (e3) => $2((t3) => ({ ...t3, minutes: e3 }))
                            }),
                            (0, i.jsxs)("div", {
                              className: D().actions,
                              children: [
                                _2.focus && (0, i.jsx)("button", {
                                  type: "button",
                                  className: D().secondary,
                                  onClick: () => {
                                    F2({ focus: null }), J();
                                  },
                                  children: "End session"
                                }),
                                (0, i.jsx)("button", {
                                  type: "button",
                                  className: D().primary,
                                  onClick: function() {
                                    F2({
                                      focus: {
                                        mode: S2.mode,
                                        minutes: S2.minutes,
                                        until: X2(S2.minutes)
                                      }
                                    }), J();
                                  },
                                  children: _2.focus ? "Update session" : "Start session"
                                })
                              ]
                            })
                          ]
                        }) : (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(U, {
                              label: "All notifications",
                              description: _2.notifications ? "Delivered as they arrive" : "Paused until you resume",
                              checked: _2.notifications,
                              onChange: (e3) => F2({ notifications: e3 })
                            }),
                            (0, i.jsx)("div", {
                              className: D().channels,
                              "data-muted": !_2.notifications || void 0,
                              children: t2.map(
                                (e3) => (0, i.jsx)(
                                  U,
                                  {
                                    label: e3.label,
                                    description: e3.description,
                                    checked: _2.channels[e3.id],
                                    onChange: (t3) => F2({
                                      channels: {
                                        ..._2.channels,
                                        [e3.id]: t3
                                      }
                                    })
                                  },
                                  e3.id
                                )
                              )
                            }),
                            n2.length > 0 && (0, i.jsxs)("div", {
                              className: D().people,
                              children: [
                                (0, i.jsx)("span", {
                                  className: D().avatars,
                                  "aria-hidden": "true",
                                  children: n2.slice(0, 3).map(
                                    (e3) => (0, i.jsx)(
                                      "img",
                                      {
                                        src: e3.avatar,
                                        alt: "",
                                        width: 28,
                                        height: 28,
                                        draggable: false
                                      },
                                      e3.id
                                    )
                                  )
                                }),
                                (0, i.jsxs)("span", {
                                  className: D().peopleText,
                                  children: [
                                    n2.map(
                                      (e3) => e3.name.split(" ")[0]
                                    ).join(", "),
                                    " can reach you during focus"
                                  ]
                                })
                              ]
                            })
                          ]
                        })
                      })
                    ]
                  },
                  v2
                )
              ]
            })
          ]
        })
      })
    });
  }
  function W({ progress: e2 }) {
    let t2 = (0, f.G)(e2, (e3) => (85 + 45 * z(e3, 0, 1)) / 100);
    return (0, i.jsx)("span", {
      className: D().textPreview,
      "aria-hidden": "true",
      children: (0, i.jsx)(u.PY1.span, { style: { scale: t2 }, children: "Aa" })
    });
  }
  var O = n(95181), G = n.n(O);
  let V = [
    {
      id: "deep-work",
      label: "Deep work",
      icon: o,
      description: "Only mentions from your team get through",
      defaultMinutes: 50
    },
    {
      id: "meetings",
      label: "Meetings",
      icon: s.A,
      description: "Chat is held, calendar alerts stay on",
      defaultMinutes: 30
    },
    {
      id: "wind-down",
      label: "Wind down",
      icon: l.A,
      description: "Everything waits until tomorrow morning",
      defaultMinutes: 90
    }
  ], B = [
    {
      id: "mentions",
      label: "Mentions",
      description: "When someone tags you",
      defaultOn: true
    },
    {
      id: "direct",
      label: "Direct messages",
      description: "One to one and small groups",
      defaultOn: true
    },
    {
      id: "deploys",
      label: "Deploy alerts",
      description: "Failed builds on main",
      defaultOn: false
    }
  ], F = [
    {
      id: "emily",
      name: "Emily Parker",
      avatar: "media/specials/control-center-emily.svg"
    },
    {
      id: "tyler",
      name: "Tyler Brooks",
      avatar: "media/specials/control-center-tyler.svg"
    },
    {
      id: "ryan",
      name: "Ryan Mitchell",
      avatar: "media/specials/control-center-ryan.svg"
    }
  ];
  function X() {
    return (0, i.jsx)("div", {
      className: G().demo,
      children: (0, i.jsx)(q, {
        focusModes: V,
        channels: B,
        people: F,
        defaultVolume: 64,
        defaultTextSize: 100,
        label: "Workspace quick settings"
      })
    });
  }
}

__m(__module,__exports,__require);
}